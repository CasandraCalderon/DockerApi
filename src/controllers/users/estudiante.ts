import { Request, Response } from "express";
import Estudiante, { IEstudiante } from "../../models/users/estudiante";
import { JsonWebToken } from '../../middleware/JsonWebToken';
class EstudianteControllers {
    async index(req: Request, res: Response) {
        const estudiante = await Estudiante.find({});
        res.send(estudiante);
    }

    async createEstudiante(req: Request, res: Response) {
        const {password} = req.body;
        const newEstudiante: IEstudiante = new Estudiante(req.body);
        newEstudiante.password = await newEstudiante.encryptPassword!(password);
        await newEstudiante.save();
        res.status(200).json({ message: 'Estudiante creado', newEstudiante});
    }
    async editEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        await Estudiante.findByIdAndUpdate(id, req.body);
        res.send("Estudiante actualizado");
    }
    async deleteEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        await Estudiante.findByIdAndDelete(id);
        res.send("Estudiante Eliminado : 'v");
    }
    async login (req: Request, res: Response) {
        console.log(req.body);
        const {username, password} = req.body;
        const user = await Estudiante.findOne({ username: username });
        if(user) {
            if(await user.matchPassword!(password)) {
                const token = JsonWebToken(user._id);
                return res.status(200).json({ message: "LOGUEADO", user, token});
            }
            return res.status(200).json({ message: "Contraseña incorrecta"});
        }
        return res.status(200).json({message: "Usuario no encontrado"});
            
    }
}
export const estudianteControllers = new EstudianteControllers();

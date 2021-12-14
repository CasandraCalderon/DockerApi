import { Request, Response } from "express";
import quintoS, { IQuintoS } from "../../models/horarios/QuintoS";

class QuintoSControllers {
    async index(req: Request, res: Response) {
        const QuintoS = await quintoS.find({});
        res.send(QuintoS);
    }

    async createClass(req: Request, res: Response) {
        const { Dia, Turno, Materia, Docente, Aula } = req.body;
        if(undefined === Dia ||
            Dia === "Seleccionar Dia..." ||
            undefined === Materia ||
            Materia === "Seleccionar Materia..." ||
            undefined === Docente ||
            Docente === "Seleccionar Docente..." ||
            undefined === Aula ||
            Aula === "Seleccionar Aula..." ||
            undefined === Turno ||
            Turno === "Seleccionar Turno..."){
                return res.status(200).json({ error: "Llene los datos vacios" });
            }
        if(await quintoS.findOne({Turno: Turno, Dia: Dia})){
            return res.status(200).json({message: "Este horario ya esta ocupado"});
        }
        else {
            const newclass = new quintoS(req.body);
            await newclass.save();
            res.send("Clase creada");
        }        
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await quintoS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await quintoS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const quintoSControllers = new QuintoSControllers();
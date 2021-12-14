import { Request, Response } from "express";
import octavoS, { IOctavoS } from "../../models/horarios/OctavoS";

class OctavoSControllers {
    async index(req: Request, res: Response) {
        const OctavoS = await octavoS.find({});
        res.send(OctavoS);
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
        if(await octavoS.findOne({Turno: Turno, Dia: Dia})){
            return res.status(200).json({message: "Este horario ya esta ocupado"});
        }
        else {
            const newclass = new octavoS(req.body);
            await newclass.save();
            res.send("Clase creada");
        }        
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await octavoS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await octavoS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const octavoSControllers = new OctavoSControllers();
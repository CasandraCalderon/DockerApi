import { Request, Response } from "express";
import septimoS, { ISeptimoS } from "../../models/horarios/SeptimoS";

class SeptimoSControllers {
    async index(req: Request, res: Response) {
        const SeptimoS = await septimoS.find({});
        res.send(SeptimoS);
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
        if(await septimoS.findOne({Turno: Turno, Dia: Dia})){
            return res.status(200).json({message: "Este horario ya esta ocupado"});
        }
        else {
            const newclass = new septimoS(req.body);
            await newclass.save();
            res.send("Clase creada");
        }        
        
    }
    async editClass(req: Request, res: Response) {
        const { id } = req.params;
        await septimoS.findByIdAndUpdate(id, req.body);
        res.send("Clase actualizada");
    }
    async deleteClass(req: Request, res: Response) {
        const { id } = req.params;
        await septimoS.findByIdAndDelete(id);
        res.send("Clase Eliminada");
    }
}
export const septimoSControllers = new SeptimoSControllers();
import { Request, Response } from "express";
import Aula, { IAula } from "../../models/aulas/aula";

class AulaControllers {
    async index(req: Request, res: Response) {
        const aulas = await Aula.find({});
        res.send(aulas);
    }

    async createAula(req: Request, res: Response) {
        const {Nombre, Piso, Capacidad, TipoSala} = req.body;
        if( undefined === Nombre ||
            Nombre.length === 0 ||
            undefined === Piso ||
            Piso === "Seleccionar planta..." ||
            undefined === TipoSala ||
            TipoSala === "Seleccionar tipo de salon..." ||
            undefined === Capacidad || Capacidad.length === 0){
                return res.status(200).json({ error: "Llene los datos vacios" });
            }
            if(await Aula.findOne({Nombre : Nombre})){
                return res.status(200).json({ error: "Ya existe un ambiente con ese nombre" });
            }
        if(!/^[1-7]{1}-+[A-D]$/.test(Nombre)){
            return res.status(200).json({ error: "Nombre no valido para ambiente (Ejm: 1-A, 4-B, 5-D)" });
        }
        const newAula = new Aula(req.body);
        await newAula.save();
        res.status(200).json({ message: "Ambiente creado"});
    }
    async editAula(req: Request, res: Response) {
        const { id } = req.params;
        await Aula.findByIdAndUpdate(id, req.body);
        res.send("Aula actualizada");
    }
    async deleteAula(req: Request, res: Response) {
        const { id } = req.params;
        await Aula.findByIdAndDelete(id);
        res.send("Aula Eliminada : 'v");
    }
}
export const aulaControllers = new AulaControllers();
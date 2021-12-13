import { Request, Response } from "express";
import Materia, { IMateria } from "../../models/materia/materia";
class MateriaControllers {
    async index(req: Request, res: Response) {
        const materias = await Materia.find({});
        res.send(materias);
    }

    async createMateria(req: Request, res: Response) {
        const {Nombre, Sigla, Semestre, CantHSemanas} = req.body;
        if(undefined === Nombre ||
            Nombre.length === 0 ||
            undefined === Sigla ||
            Sigla.length === 0 ||
            undefined === Semestre ||
            Semestre === "Seleccionar semestre..." ||
            undefined === CantHSemanas ||
            CantHSemanas.length === 0 ){
                return res.status(200).json({ error: "Llene los datos vacios" });
            }
        if(!/([A-Z])\w+/g.test(Nombre)){
            return res.status(200).json({ error: "Formato de nombre de materia no valido (Ejm: Calculo III, Programacion I, Ingles)" });
        }
        if(await Materia.findOne({Nombre:Nombre})){
            return res.status(200).json({ error: "Ya existe una materia con ese nombre" });
        }
        if(!/^[A-Z]{3}-+[0-9]{3}$/.test(Sigla)){
            return res.status(200).json({ error: "Formato de sigla no valido (Ejm: ING-100, SIS-300, FIS-200)" });
        }
        if(await Materia.findOne({Sigla:Sigla})){
            return res.status(200).json({ error: "Ya existe una materia con esa sigla"});
        }
        const newMateria = new Materia(req.body);
        await newMateria.save();
        res.status(200).json({ message: "Materia creada"});
    }
    async editMateria(req: Request, res: Response) {
        const { id } = req.params;
        await Materia.findByIdAndUpdate(id, req.body);
        res.send("Materia actualizada");
    }
    async deleteMateria(req: Request, res: Response) {
        const { id } = req.params;
        await Materia.findByIdAndDelete(id);
        res.send("Materia Eliminada : 'v");
    }
}
export const materiaControllers = new MateriaControllers();
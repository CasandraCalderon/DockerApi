import { Request, Response } from "express";
import path from 'path';
import fs from 'fs-extra';
import { JsonWebToken } from '../../middleware/JsonWebToken';

import Docente, { IDocente } from "../../models/users/docente";

class DocenteControllers {
    async index(req: Request, res: Response) {
        const docente = await Docente.find({});
        res.send(docente);
    }

    async createDocente(req: Request, res: Response) {
        const {password} = req.body;
        const newDocente: IDocente = new Docente(req.body);
        newDocente.password = await newDocente.encryptPassword!(password);
        await newDocente.save();
        res.status(200).json({ message: 'Docente creado', newDocente});
    }

    async editDocente(req: Request, res: Response) {
        const { id } = req.params;
        await Docente.findByIdAndUpdate(id, req.body);
        res.send("Docente actualizado");
    }
    async deleteDocente(req: Request, res: Response) {
        const { id } = req.params;
        const docente = await Docente.findByIdAndDelete(id);
        if (docente) {
            await fs.unlink(path.resolve(docente.image))
        }
       await Docente.findByIdAndDelete(id);
        res.send("Docente Eliminado : 'v");
    }
    async login (req: Request, res: Response) {
        console.log(req.body);
        const {username, password} = req.body;
        const user = await Docente.findOne({ username: username });
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
export const docenteControllers = new DocenteControllers();


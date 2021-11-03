import { Request, Response } from "express";
import User, { IUser } from "../models/index";
class IndexControllers {
    async index(req: Request, res: Response) {
        res.send("hola otra vez");
    }

    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        if (name.length === 0) {
            res.send("el nombre no puede estar vacio");
        }
        //console.log(name, email, password);
        const newUser = new User(req.body);
        await newUser.save();
        res.send("usuario creado correctamente");
    }
    async editUser(req: Request, res: Response) {
        res.send("creando usuario");
    }
    async deleteUser(req: Request, res: Response) {
        res.send("creando usuario");
    }
}
export const indexControllers = new IndexControllers();
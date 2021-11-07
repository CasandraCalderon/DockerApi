import { Request, Response } from "express";
import User, { IUser } from "../models/index";
class IndexControllers {
    async index(req: Request, res: Response) {
        const users = await User.find({});
        res.send(users);
    }

    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        if (name.length === 0) {
            res.send("el nombre no puede estar vacio");
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.send("usuario creado correctamente");
    }
    async editUser(req: Request, res: Response) {
        const { id } = req.params;
        await User.findByIdAndUpdate(id, req.body);
        res.send("Usuario actualizado");
    }
    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.send("Uusario Eliminado : 'v");
    }
}
export const indexControllers = new IndexControllers();
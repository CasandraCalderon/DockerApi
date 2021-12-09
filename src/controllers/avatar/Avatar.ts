import { Request, Response } from "express";
import Avatar, {IAvatar} from "../../models/avatar/Avatar";
import path from 'path';
import fs from 'fs-extra';
class AvatarControllers {
    async index(req: Request, res: Response) {
        const avatar = await Avatar.find({});
        res.send(avatar);
    }
    async createAvatar(req: Request, res: Response) {
        const { RU } = req.body;
        const newAvatar = {
            RU: RU,
            image: req.file?.path, 
        }
        const avatarPhoto = new Avatar(newAvatar);
        await avatarPhoto.save();
        res.send({message:"Avatar creado", avatarPhoto });
    }
    async editAvatar(req: Request, res: Response) {
        const { id } = req.params;
        await Avatar.findByIdAndUpdate(id, req.body);
        res.send("Avatar actualizado");
    }
    async deleteAvatar(req: Request, res: Response) {
        const { id } = req.params;
        const avatarPhoto = await Avatar.findByIdAndDelete(id);
        if(avatarPhoto) {
            await fs.unlink(path.resolve(avatarPhoto.image));
        }
        res.send("Avatar eliminado");
    }
}
export const avatarControllers = new AvatarControllers();
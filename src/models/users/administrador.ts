import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
export interface IAdministrador extends Document {
    RU? : string;
    Nombre: string;
    Ap_Paterno: string;
    Ap_Materno: string;
    CI?: string;
    Email?: string;
    Telefono: number;
    Cargo? : string;
    username : string;
    password : string;
    encryptPassword?(password : string) : Promise<string>;
    matchPassword?(password : string) : Promise<boolean>;
}
const administradorSchema = new Schema({
    RU: {
        type: String,
        required: true,
        unique: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    Ap_Paterno: {
        type: String,
        required: true,
    },

    Ap_Materno: {
        type: String,
        required: true,
    },
    CI: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Telefono: {
        type: String,
        required: true,
        unique: true,
    },
    Cargo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
});
administradorSchema.methods.encryptPassword = async (
    password: string
    ): Promise<string> => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
administradorSchema.methods.matchPassword = async function (
    password: string
    ): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

export default model<IAdministrador>("Administrador", administradorSchema);
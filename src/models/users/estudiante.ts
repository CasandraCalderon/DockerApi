import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';
export interface IEstudiante extends Document {
    Nombre: string;
    Ap_Paterno: string;
    Ap_Materno: string;
    CI: string;
    Email: string;
    RU : string;
    Telefono: string;
    Cargo : string;
    Semestre : string;
    username : string;
    password : string;
    encryptPassword?(password : string) : Promise<string>;
    matchPassword?(password : string) : Promise<boolean>;
}
const estudianteSchema = new Schema({
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
    RU: {
        type: String,
        required: true,
        unique: true,
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
    Semestre: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
});
estudianteSchema.methods.encryptPassword = async (
    password: string
    ): Promise<string> => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
estudianteSchema.methods.matchPassword = async function (
    password: string
    ): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

export default model<IEstudiante>("Estudiante", estudianteSchema);
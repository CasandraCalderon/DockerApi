import { model, Schema } from "mongoose";

export interface IAdministrador {
    Nombre: string;
    Ap_Paterno: string;
    Ap_Materno: string;
    CI: string;
    Email: string;
    RU : string;
    Cargo : string;
    username : string;
    password : string;
}
const administradorSchema = new Schema({
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
    Cargo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default model<IAdministrador>("Administrador", administradorSchema);
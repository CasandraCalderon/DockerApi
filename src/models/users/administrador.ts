import { model, Schema } from "mongoose";

export interface IAdministrador {
    Nombre: string;
    Ap_Paterno: string;
    Ap_Materno: string;
    CI: string;
    Email: string;
    RU : string;
    Cargo : string;
    Usuario : string;
    Contraseña : string;
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
    Usuario: {
        type: String,
        required: true,
    },
    Contraseña: {
        type: String,
        required: true,
    },
});

export default model<IAdministrador>("Administrador", administradorSchema);
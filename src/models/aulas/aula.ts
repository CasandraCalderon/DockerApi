import { model, Schema } from "mongoose";

export interface IAula {
    Nombre: string;
    Piso: string;
    Capacidad: string;
    TipoSala: string;
}
const aulaSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Piso: {
        type: String,
        required: true,
    },

    Capacidad: {
        type: String,
        required: true,
    },
    TipoSala: {
        type: String,
        required: true,
    },
});

export default model<IAula>("Aula", aulaSchema);
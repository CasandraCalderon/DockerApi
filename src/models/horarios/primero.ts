import { model, Schema } from "mongoose";

export interface IPrimero {
    Dia: string;
    Turno: string;
    Materia: string;
}
const primeroSchema = new Schema({
    Dia: {
        type: String,
        required: true,
    },
    Turno: {
        type: String,
        required: true,
    },
    Materia: {
        type: String,
        required: true,
    }
});

export default model<IPrimero>("Primero", primeroSchema);
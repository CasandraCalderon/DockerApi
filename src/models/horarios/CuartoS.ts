import { model, Schema, Document } from "mongoose";

export interface ICuartoS extends Document{
    Dia: string;
    Materia: string;
    Docente: string;
    Aula : string;
    Turno : string;
}
const cuartoSSchema = new Schema({
    Dia: {
        type: String,
        required: true,
    },
    Materia: {
        type: String,
        required: true,
    },
    Docente: {
        type: String,
        required: true,
    },
    Aula: {
        type: String,
        required: true,
    },
    Turno: {
        type: String,
        required: true,
    }
});

export default model<ICuartoS>("CuartoS", cuartoSSchema);
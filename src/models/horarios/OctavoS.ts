import { model, Schema, Document } from "mongoose";

export interface IOctavoS extends Document{
    Dia: string;
    Materia: string;
    Docente: string;
    Aula : string;
    Turno : string;
}
const octavoSSchema = new Schema({
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

export default model<IOctavoS>("OctavoS", octavoSSchema);
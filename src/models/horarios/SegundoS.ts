import { model, Schema } from "mongoose";

export interface ISegundoS {
    Dia: string;
    Materia: string;
    Docente: string;
    Aula : string;
    Turno : string;
}
const segundoSSchema = new Schema({
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

export default model<ISegundoS>("SegundoS", segundoSSchema);
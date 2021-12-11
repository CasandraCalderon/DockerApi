import { model, Schema } from "mongoose";

export interface ITerceroS {
    Dia: string;
    Materia: string;
    Docente: string;
    Aula : string;
    Turno : string;
}
const terceroSSchema = new Schema({
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

export default model<ITerceroS>("TerceroS", terceroSSchema);
import { model, Schema } from "mongoose";

export interface IMateria {
    Nombre: string;
    Sigla: string;
    Semestre: string;
    TipoAula: string;
    Docente: string;
    CantHSemanas : number;
    programados : string[];
    select : boolean;
}
const materiaSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Sigla: {
        type: String,
        required: true,
        unique: true,
    },

    Semestre: {
        type: String,
        required: true,
    },
    TipoAula: {
        type: String,
        required: true,
    },
    CantHSemanas: {
        type: Number,
        required: true,
    },
    programados: {
        type: Array,
        required: false,
    },
    select: {
        type: false,
        required: false,
    },
});

export default model<IMateria>("Materia", materiaSchema);
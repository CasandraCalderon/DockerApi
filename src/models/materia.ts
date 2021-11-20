import { model, Schema } from "mongoose";

export interface IMateria {
    Nombre: string;
    Sigla: string;
    Semestre: string;
    TipoAula: string;
    Docente: string;
    CantHSemanas : number;
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
    Docente: {
        type: String,
        required: false,
    },
    CantHSemanas: {
        type: Number,
        required: true,
    }
});

export default model<IMateria>("Materia", materiaSchema);
import { model, Schema } from "mongoose";

export interface IMateria {
    Nombre: string;
    Sigla: string;
    Semestre: string;
    TipoAula: string;
    CantGrupos: number;
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
    CantGrupos: {
        type: Number,
        required: true,
    },
    CantHSemanas: {
        type: Number,
        required: true,
    },
});

export default model<IMateria>("Materia", materiaSchema);
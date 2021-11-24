import { model, Schema } from "mongoose";

export interface IMateria {
    Nombre: string;
    Sigla: string;
    Semestre: string;
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
    CantHSemanas: {
        type: Number,
        required: true,
    }
});

export default model<IMateria>("Materia", materiaSchema);
import { model, Schema } from "mongoose";

export interface ISemestre {
    Nombre: string;
}
const semestreSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    }
});

export default model<ISemestre>("Semestre", semestreSchema);
import { model, Schema } from "mongoose";

export interface IPlanta {
    Nombre: string;
}
const plantaSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    }
});

export default model<IPlanta>("Planta", plantaSchema);
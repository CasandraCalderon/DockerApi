import { model, Schema } from "mongoose";

export interface ITipoAulas {
    Nombre: string;
}
const tipoAulaSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
    }
});

export default model<ITipoAulas>("TipoAulas", tipoAulaSchema);
import { model, Schema } from "mongoose";

export interface IAvatar {
    RU: string;
    image: string;
}
const avatarSchema = new Schema({
    RU: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
});

export default model<IAvatar>("Avatar", avatarSchema);
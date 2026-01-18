import { model, Schema } from "mongoose";
export const ActifSchema = new Schema({
    userId: { type: String },
    productId: { type: String, required: true },
    CatDescription: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const ActifModel = model('Actif', ActifSchema);
//# sourceMappingURL=passif.model.js.map
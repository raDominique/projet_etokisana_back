import mongoose, { model, Schema } from "mongoose";
export const DepotItemSchema = new Schema({
    currentOwnerId: { type: mongoose.Schema.ObjectId, ref: 'user' },
    currentDepotId: { type: mongoose.Schema.ObjectId, ref: 'site' },
    productId: { type: mongoose.Schema.ObjectId, ref: 'product' },
    stock: { type: Number },
    prix: { type: Number },
    lastUpdate: { type: Date },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
export const DepotItemModel = model('depotItem', DepotItemSchema);
//# sourceMappingURL=DepotItem.model.js.map
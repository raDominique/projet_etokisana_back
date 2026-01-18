import mongoose, { model, ObjectId, Schema } from "mongoose";

export interface IDepotItem{
    currentOwnerId : ObjectId,
    currentDepotId : ObjectId,
    productId : ObjectId,
    stock: number,
    prix   : number,
    lastUpdate : Date,
}
export const DepotItemSchema = new Schema<IDepotItem>({
    currentOwnerId  : { type : mongoose.Schema.ObjectId , ref : 'user'},
    currentDepotId  : { type : mongoose.Schema.ObjectId, ref : 'site'},
    productId       : { type : mongoose.Schema.ObjectId, ref : 'product'},
    stock           : { type : Number},
    prix            : { type : Number},
    lastUpdate      : { type : Date},
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const DepotItemModel = model<IDepotItem>('depotItem',DepotItemSchema)
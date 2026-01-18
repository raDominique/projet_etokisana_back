import { model, Schema } from "mongoose";

export interface IActif{
    userId : string;
    productId         : string;
    CatDescription  : string;
}

export const ActifSchema = new Schema<IActif>({
    userId : { type : String},
    productId         : { type : String,required:true},
    CatDescription  : { type : String}
},{
    timestamps : true,
    toJSON : {
        virtuals : true
    },
    toObject : {
        virtuals : true
    }
});

export const ActifModel = model<IActif>('Actif',ActifSchema)
import mongoose, { ObjectId } from "mongoose";
export interface IDepotItem {
    currentOwnerId: ObjectId;
    currentDepotId: ObjectId;
    productId: ObjectId;
    stock: number;
    prix: number;
    lastUpdate: Date;
}
export declare const DepotItemSchema: mongoose.Schema<IDepotItem, mongoose.Model<IDepotItem, any, any, any, mongoose.Document<unknown, any, IDepotItem, any, {}> & IDepotItem & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IDepotItem, mongoose.Document<unknown, {}, mongoose.FlatRecord<IDepotItem>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IDepotItem> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepotItemModel: mongoose.Model<IDepotItem, {}, {}, {}, mongoose.Document<unknown, {}, IDepotItem, {}, {}> & IDepotItem & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;

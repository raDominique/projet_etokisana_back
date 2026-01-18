import { Schema } from "mongoose";
export interface IActif {
    userId: string;
    productId: string;
    CatDescription: string;
}
export declare const ActifSchema: Schema<IActif, import("mongoose").Model<IActif, any, any, any, import("mongoose").Document<unknown, any, IActif, any, {}> & IActif & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IActif, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IActif>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IActif> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ActifModel: import("mongoose").Model<IActif, {}, {}, {}, import("mongoose").Document<unknown, {}, IActif, {}, {}> & IActif & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;

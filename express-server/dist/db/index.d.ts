import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    username?: string | undefined;
    password?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username?: string | undefined;
    password?: string | undefined;
}> & {
    username?: string | undefined;
    password?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username?: string | undefined;
    password?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username?: string | undefined;
    password?: string | undefined;
}>> & mongoose.FlatRecord<{
    username?: string | undefined;
    password?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const Admin: mongoose.Model<{
    username?: string | undefined;
    password?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username?: string | undefined;
    password?: string | undefined;
}> & {
    username?: string | undefined;
    password?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username?: string | undefined;
    password?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username?: string | undefined;
    password?: string | undefined;
}>> & mongoose.FlatRecord<{
    username?: string | undefined;
    password?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const Course: mongoose.Model<{
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
}> & {
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
}>> & mongoose.FlatRecord<{
    title?: string | undefined;
    description?: string | undefined;
    imageLink?: string | undefined;
    price?: number | undefined;
    published?: boolean | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;

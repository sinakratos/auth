import { ObjectId } from "mongodb";

export class User {

    _id?: number | ObjectId;
    fullname: string;
    email: string;
    age: number;
}
import { ObjectId } from "mongodb";

export interface User {
    _id?: ObjectId;
    fullname: string;
    email: string;
    age: number;
}
import { Inject, Injectable } from '@nestjs/common';
import { Collection, Db } from 'mongodb';

@Injectable()
export class AuthService {
    constructor(
        @Inject('DATABASE_CONNECTION') private readonly db: Db,
    ) { }

    private get user(): Collection {
        return this.db.collection('users');
    }

    async create(data: any): Promise<any> {
        return await this.user.insertOne(data);
    }
    async findAll(): Promise<any[]> {
        return await this.user.find().toArray();
    }
}

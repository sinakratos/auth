import { Inject, Injectable, Logger } from '@nestjs/common';
import { Collection, Db } from 'mongodb';
import { User } from './dto/createUser.dto';

@Injectable()
export class AuthService {
    // private readonly logger = new Logger(AuthService.name)
    constructor(
        @Inject('DATABASE_CONNECTION') private readonly db: Db,
    ) {
    }

    private get user(): Collection<any> {

        return this.db.collection('users');
    }

    async create(data: User): Promise<any> {
        return await this.user.insertOne(data);
    }
    async findAll(): Promise<User[]> {
        return this.user.find().toArray();
    }
}
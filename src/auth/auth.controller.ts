import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Get()
    async getUsers() {
        console.log(await this.authService.findAll());
        return await this.authService.findAll();
    }

    @Post()
    async addUser(@Body() input: User) {
        console.log(input);
        return await this.authService.create(input);
    }
}

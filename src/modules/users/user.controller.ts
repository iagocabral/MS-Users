import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() body: CreateUserDto){
        return this.usersService.create(body);
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.usersService.updateUserById(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.usersService.delete(id);
    }
}
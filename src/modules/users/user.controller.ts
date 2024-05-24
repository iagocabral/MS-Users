import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() body: CreateUserDto){
        return this.usersService.create(body);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.usersService.update(id, body);
    }
}
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/user.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) {}

    async create(user: CreateUserDto) {
        return await this.repository.create(user)
    }

    async findAll() {
        return await this.repository.findAll();
    }

    async updateUserById(id: string, updateUserDto: UpdateUserDto) {
        return await this.repository.updateUserById(id, updateUserDto);
    }

    async delete(id: string) {
        return await this.repository.deleteUserById(id);
    }
}
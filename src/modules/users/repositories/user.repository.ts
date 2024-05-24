import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { randomUUID } from "node:crypto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
    private users: any[] = [];

    async create(user: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const formatUser = {
            email: user.email,
            name: user.name,
            id: randomUUID(),
            password: hashedPassword
        }
        this.users.push(formatUser);
        return formatUser;
    }

    findAll() {
        return this.users;
    }

    async updateUserById(id: string, data: UpdateUserDto){
        const user = this.users.find(user => user.id === id);
        for(const key in data){
            if(key === 'password'){
                user[key] = await bcrypt.hash(data[key], 10);
            } else {
            user[key] = data[key];
            }
        }   
        return user;
    }

    deleteUserById(id: string){
        const index = this.users.findIndex((user) => user.id === id);
        this.users.splice(index, 1);
    }
}
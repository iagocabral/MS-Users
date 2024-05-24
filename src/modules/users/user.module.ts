import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./repositories/user.repository";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
})
export class UsersModule {}
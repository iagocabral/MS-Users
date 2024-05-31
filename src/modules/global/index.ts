import { PrismaService } from "./prisma/prisma.service";
import {PrismaModule} from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config";

export const globalModules = [PrismaModule, ConfigModule.forRoot()];
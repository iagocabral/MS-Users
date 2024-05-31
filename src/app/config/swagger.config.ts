import { INestApplication } from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export const addSwagger = (app: INestApplication) => {
    const configService = app.get<ConfigService>(ConfigService);
    const appName = configService.get('API_NAME');
    const apiServer = configService.get('API_SERVER');
    const appDescription = configService.get('API_DESCRIPTION');
    const appTags = configService.get('API_TAGS');

    const config = new DocumentBuilder()
        .setTitle(appName)
        .setDescription(appDescription)
        .addServer(apiServer ?? '')
        .setVersion('1.0')
        .addTag(appTags)

    const configBuild = config.build();

    const document = SwaggerModule.createDocument(app, configBuild);

    SwaggerModule.setup('docs', app, document);
};
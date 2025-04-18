"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.static((0, path_1.join)(__dirname, '..', 'public')));
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
    console.log(`🚀 App running at http://localhost:3000`);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const AppError_1 = require("./AppError");
const generalMiddleware_1 = __importDefault(require("./generalMiddleware"));
class Server {
    constructor(port = 8080) {
        this.port = process.env.PORT ? parseInt(process.env.PORT) : port;
        this.app = (0, express_1.default)();
        this.app.listen(this.port, () => { console.log("Server started at", this.port); });
        new generalMiddleware_1.default(this.app);
    }
    addRoute(endpoint, router) {
        this.app.use(endpoint, router);
    }
    addCatchAllRoute(handler) {
        this.app.use("*", handler);
    }
    useErrorHandler() {
        this.app.use(AppError_1.errorMiddleware);
    }
}
;
exports.default = Server;

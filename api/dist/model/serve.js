"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("../routes/router")); // Asegúrate de que la ruta sea correcta
class Serve {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8100';
        this.middlewares();
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        // Configuración CORS simplificada
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:3000', // Asegúrate de permitir el origen del frontend
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
        }));
        // Middleware para servir archivos estáticos
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../../uploads')));
    }
    routes() {
        this.app.use('/', router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}
exports.default = Serve;

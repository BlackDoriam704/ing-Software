"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("../model/usuario"));
class UserController {
}
_a = UserController;
// Obtener todos los usuarios
UserController.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usuario_1.default.findAll();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
});
// Obtener un usuario por ID
UserController.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usuario_1.default.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
});
// Crear un nuevo usuario
UserController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const newUser = yield usuario_1.default.create({ name, email, password });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
});
// Actualizar un usuario por ID
UserController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usuario_1.default.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        yield user.update(req.body);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
});
// Eliminar un usuario por ID
UserController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usuario_1.default.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return;
        }
        yield user.destroy();
        res.json({ message: 'Usuario eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
});
exports.default = UserController;

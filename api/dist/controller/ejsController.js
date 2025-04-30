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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getEjs = void 0;
const ej_1 = __importDefault(require("../model/ej"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = __importDefault(require("../model/usuario"));
const getEjs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ejs = yield ej_1.default.findAll();
        res.json(ejs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving species', error });
    }
});
exports.getEjs = getEjs;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        // Validar si ya existe un usuario con el correo
        const existingUser = yield usuario_1.default.findOne({ where: { correo } });
        if (existingUser) {
            return res.status(400).json({ message: 'Correo ya está en uso' });
        }
        // Hashear la contraseña
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield usuario_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error creando usuario', error });
    }
});
exports.createUser = createUser;

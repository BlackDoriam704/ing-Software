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
const answers_1 = __importDefault(require("../model/answers")); // Asegúrate de que la ruta sea correcta
class AnswersController {
}
_a = AnswersController;
// Obtener todas las respuestas
AnswersController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answers = yield answers_1.default.findAll();
        res.json(answers);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las respuestas', error });
    }
});
// Obtener una respuesta por ID
AnswersController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield answers_1.default.findByPk(req.params.id);
        if (!answer) {
            res.status(404).json({ message: 'Respuesta no encontrada' });
            return;
        }
        res.json(answer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la respuesta', error });
    }
});
// Crear una nueva respuesta
AnswersController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { response_id, question_id, user_answer, is_correct } = req.body;
        const newAnswer = yield answers_1.default.create({ response_id, question_id, user_answer, is_correct });
        res.status(201).json(newAnswer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la respuesta', error });
    }
});
// Actualizar una respuesta existente
AnswersController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield answers_1.default.findByPk(req.params.id);
        if (!answer) {
            res.status(404).json({ message: 'Respuesta no encontrada' });
            return;
        }
        const { response_id, question_id, user_answer, is_correct } = req.body;
        yield answer.update({ response_id, question_id, user_answer, is_correct });
        res.json(answer);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la respuesta', error });
    }
});
// Eliminar una respuesta
AnswersController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield answers_1.default.findByPk(req.params.id);
        if (!answer) {
            res.status(404).json({ message: 'Respuesta no encontrada' });
            return;
        }
        yield answer.destroy();
        res.json({ message: 'Respuesta eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la respuesta', error });
    }
});
exports.default = AnswersController;

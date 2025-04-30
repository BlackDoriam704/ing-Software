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
const examResponse_1 = __importDefault(require("../model/examResponse")); // Asegúrate de que la ruta sea correcta
class ExamResponsesController {
}
_a = ExamResponsesController;
// Obtener todas las respuestas de exámenes
ExamResponsesController.getAllResponses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responses = yield examResponse_1.default.findAll();
        res.json(responses);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las respuestas de exámenes', error });
    }
});
// Obtener una respuesta específica por user_id y exam_id
ExamResponsesController.getByUserAndExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, exam_id } = req.params; // Obtener user_id y exam_id desde los parámetros de la URL
        // Buscar una respuesta que coincida con user_id y exam_id
        const response = yield examResponse_1.default.findOne({
            where: { user_id, exam_id },
        });
        if (!response) {
            res.status(404).json({ message: 'Respuesta no encontrada para este usuario y examen' });
            return;
        }
        res.json(response); // Devolver la respuesta encontrada
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la respuesta', error });
    }
});
// Crear una nueva respuesta de examen
ExamResponsesController.createResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, exam_id, score } = req.body;
        const newResponse = yield examResponse_1.default.create({ user_id, exam_id, score });
        res.status(201).json(newResponse);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la respuesta', error });
    }
});
// Actualizar una respuesta de examen por ID
ExamResponsesController.updateResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield examResponse_1.default.findByPk(req.params.id);
        if (!response) {
            res.status(404).json({ message: 'Respuesta no encontrada' });
            return;
        }
        const { user_id, exam_id, score } = req.body;
        yield response.update({ user_id, exam_id, score });
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la respuesta', error });
    }
});
// Eliminar una respuesta de examen por ID
ExamResponsesController.deleteResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield examResponse_1.default.findByPk(req.params.id);
        if (!response) {
            res.status(404).json({ message: 'Respuesta no encontrada' });
            return;
        }
        yield response.destroy();
        res.json({ message: 'Respuesta eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la respuesta', error });
    }
});
exports.default = ExamResponsesController;

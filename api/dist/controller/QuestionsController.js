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
const questions_1 = __importDefault(require("../model/questions")); // Asegúrate de que la ruta sea correcta
class QuestionsController {
}
_a = QuestionsController;
QuestionsController.getQuestionsByExamId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { exam_id } = req.params;
        const questions = yield questions_1.default.findAll({ where: { exam_id } });
        if (questions.length === 0) {
            res.status(404).json({ message: 'No se encontraron preguntas para este examen' });
            return;
        }
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las preguntas del examen', error });
    }
});
// Obtener todas las preguntas
QuestionsController.getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield questions_1.default.findAll();
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las preguntas', error });
    }
});
// Obtener una pregunta por ID
QuestionsController.getQuestionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield questions_1.default.findByPk(req.params.id);
        if (!question) {
            res.status(404).json({ message: 'Pregunta no encontrada' });
            return;
        }
        res.json(question);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la pregunta', error });
    }
});
// Crear una nueva pregunta
QuestionsController.createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { exam_id, question_text, option_a, option_b, option_c, option_d, correct_answer } = req.body;
        const newQuestion = yield questions_1.default.create({ exam_id, question_text, option_a, option_b, option_c, option_d, correct_answer });
        res.status(201).json(newQuestion);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la pregunta', error });
    }
});
// Actualizar una pregunta por ID
QuestionsController.updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield questions_1.default.findByPk(req.params.id);
        if (!question) {
            res.status(404).json({ message: 'Pregunta no encontrada' });
            return;
        }
        const { exam_id, question_text, option_a, option_b, option_c, option_d, correct_answer } = req.body;
        yield question.update({ exam_id, question_text, option_a, option_b, option_c, option_d, correct_answer });
        res.json(question);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la pregunta', error });
    }
});
// Eliminar una pregunta por ID
QuestionsController.deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const question = yield questions_1.default.findByPk(req.params.id);
        if (!question) {
            res.status(404).json({ message: 'Pregunta no encontrada' });
            return;
        }
        yield question.destroy();
        res.json({ message: 'Pregunta eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la pregunta', error });
    }
});
exports.default = QuestionsController;

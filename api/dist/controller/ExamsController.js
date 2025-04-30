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
const exams_1 = __importDefault(require("../model/exams")); // Asegúrate de que la ruta sea correcta
class ExamsController {
}
_a = ExamsController;
// Obtener todos los exámenes
ExamsController.getAllExams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exams = yield exams_1.default.findAll();
        res.json(exams);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los exámenes', error });
    }
});
// Obtener un examen por ID
ExamsController.getExamById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exam = yield exams_1.default.findByPk(req.params.id);
        if (!exam) {
            res.status(404).json({ message: 'Examen no encontrado' });
            return;
        }
        res.json(exam);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el examen', error });
    }
});
// Crear un nuevo examen
ExamsController.createExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course_id, title, description } = req.body;
        const newExam = yield exams_1.default.create({ course_id, title, description });
        res.status(201).json(newExam);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el examen', error });
    }
});
// Actualizar un examen por ID
ExamsController.updateExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exam = yield exams_1.default.findByPk(req.params.id);
        if (!exam) {
            res.status(404).json({ message: 'Examen no encontrado' });
            return;
        }
        const { course_id, title, description } = req.body;
        yield exam.update({ course_id, title, description });
        res.json(exam);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el examen', error });
    }
});
// Eliminar un examen por ID
ExamsController.deleteExam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exam = yield exams_1.default.findByPk(req.params.id);
        if (!exam) {
            res.status(404).json({ message: 'Examen no encontrado' });
            return;
        }
        yield exam.destroy();
        res.json({ message: 'Examen eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el examen', error });
    }
});
exports.default = ExamsController;

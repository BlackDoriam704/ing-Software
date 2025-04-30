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
const enrollments_1 = __importDefault(require("../model/enrollments")); // Asegúrate de que la ruta sea correcta
class EnrollmentsController {
}
_a = EnrollmentsController;
// Obtener los cursos de una persona por user_id
EnrollmentsController.getCoursesByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        const enrollments = yield enrollments_1.default.findAll({ where: { user_id } }); // Asegúrate de que 'course' esté correctamente definido en las asociaciones del modelo
        if (enrollments.length === 0) {
            res.status(404).json({ message: 'No se encontraron cursos para este usuario' });
            return;
        }
        res.json(enrollments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los cursos del usuario', error });
    }
});
// Obtener todas las inscripciones
EnrollmentsController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollments = yield enrollments_1.default.findAll();
        res.json(enrollments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las inscripciones', error });
    }
});
// Obtener una inscripción por ID
EnrollmentsController.getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollment = yield enrollments_1.default.findByPk(req.params.id);
        if (!enrollment) {
            res.status(404).json({ message: 'Inscripción no encontrada' });
            return;
        }
        res.json(enrollment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la inscripción', error });
    }
});
// Registrar una nueva inscripción
EnrollmentsController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params; // Extraer user_id de la URL
        const { course_id } = req.body; // course_id sigue viniendo del cuerpo de la solicitud
        // Validar que course_id esté presente
        if (!course_id) {
            res.status(400).json({ message: 'El course_id es obligatorio' });
            return;
        }
        // Crear la inscripción
        const newEnrollment = yield enrollments_1.default.create({ user_id, course_id });
        res.status(201).json(newEnrollment);
    }
    catch (error) {
        console.error(error); // Log para depuración
        res.status(500).json({
            message: 'Error al registrar la inscripción',
            error: error instanceof Error ? error.message : error
        });
    }
});
// Eliminar una inscripción
EnrollmentsController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollment = yield enrollments_1.default.findByPk(req.params.id);
        if (!enrollment) {
            res.status(404).json({ message: 'Inscripción no encontrada' });
            return;
        }
        yield enrollment.destroy();
        res.json({ message: 'Inscripción eliminada correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la inscripción', error });
    }
});
exports.default = EnrollmentsController;

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
const courses_1 = __importDefault(require("../model/courses")); // Asegúrate de que la ruta sea correcta
class CoursesController {
}
_a = CoursesController;
// Obtener todos los cursos
CoursesController.getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield courses_1.default.findAll();
        res.json(courses);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los cursos', error });
    }
});
// Obtener un curso por ID
CoursesController.getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courses_1.default.findByPk(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Curso no encontrado' });
            return;
        }
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el curso', error });
    }
});
// Crear un nuevo curso
CoursesController.createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const newCourse = yield courses_1.default.create({ name, description });
        res.status(201).json(newCourse);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el curso', error });
    }
});
// Actualizar un curso por ID
CoursesController.updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courses_1.default.findByPk(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Curso no encontrado' });
            return;
        }
        yield course.update(req.body);
        res.json(course);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el curso', error });
    }
});
// Eliminar un curso por ID
CoursesController.deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courses_1.default.findByPk(req.params.id);
        if (!course) {
            res.status(404).json({ message: 'Curso no encontrado' });
            return;
        }
        yield course.destroy();
        res.json({ message: 'Curso eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el curso', error });
    }
});
exports.default = CoursesController;

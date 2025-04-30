"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const CoursesController_1 = __importDefault(require("../controller/CoursesController"));
const ExamsController_1 = __importDefault(require("../controller/ExamsController"));
const QuestionsController_1 = __importDefault(require("../controller/QuestionsController"));
const EnrollmentsController_1 = __importDefault(require("../controller/EnrollmentsController"));
const ExamResponsesController_1 = __importDefault(require("../controller/ExamResponsesController"));
const router = (0, express_1.Router)();
// Definir las rutas
router.get('/users', UserController_1.default.getAllUsers); // Obtener todos los usuarios
router.get('/users/:id', UserController_1.default.getUserById); // Obtener un usuario por ID
router.post('/user', UserController_1.default.createUser); // Crear un nuevo usuario
router.put('/users/:id', UserController_1.default.updateUser); // Actualizar un usuario por ID
router.delete('/users/:id', UserController_1.default.deleteUser); // Eliminar un usuario por ID
// Rutas para Courses
router.get('/courses', CoursesController_1.default.getAllCourses);
router.get('/courses/:id', CoursesController_1.default.getCourseById);
router.post('/courses', CoursesController_1.default.createCourse);
router.put('/courses/:id', CoursesController_1.default.updateCourse);
router.delete('/courses/:id', CoursesController_1.default.deleteCourse);
// Rutas para Exams
router.get('/exams', ExamsController_1.default.getAllExams);
router.get('/exams/:id', ExamsController_1.default.getExamById);
router.post('/exams', ExamsController_1.default.createExam);
router.put('/exams/:id', ExamsController_1.default.updateExam);
router.delete('/exams/:id', ExamsController_1.default.deleteExam);
// Rutas para Questions
router.get('/questions', QuestionsController_1.default.getAllQuestions);
router.get('/questions/:id', QuestionsController_1.default.getQuestionById);
router.post('/questions', QuestionsController_1.default.createQuestion);
router.put('/questions/:id', QuestionsController_1.default.updateQuestion);
router.delete('/questions/:id', QuestionsController_1.default.deleteQuestion);
router.get('/exams/:exam_id/questions', QuestionsController_1.default.getQuestionsByExamId);
// Rutas para Enrollments
router.get('/enrollments', EnrollmentsController_1.default.getAll);
router.get('/enrollments/user/:user_id', EnrollmentsController_1.default.getCoursesByUserId);
router.get('/enrollments/:id', EnrollmentsController_1.default.getById);
router.post('/enrollments/create/:user_id', EnrollmentsController_1.default.create);
router.delete('/enrollments/:id', EnrollmentsController_1.default.delete);
router.get('/exam-responses', ExamResponsesController_1.default.getAllResponses);
router.get('/exam-responses/:user_id/:exam_id', ExamResponsesController_1.default.getByUserAndExam);
router.post('/exam-responses', ExamResponsesController_1.default.createResponse);
router.put('/exam-responses/:id', ExamResponsesController_1.default.updateResponse);
router.delete('/exam-responses/:id', ExamResponsesController_1.default.deleteResponse);
exports.default = router;

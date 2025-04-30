"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("../db/app")); // Asegúrate de que la ruta sea correcta
class ExamResponses extends sequelize_1.Model {
}
ExamResponses.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    exam_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    score: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0, // Valor predeterminado para el puntaje
    },
    submitted_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: app_1.default,
    modelName: 'exam_responses',
    timestamps: false, // Si no usas createdAt y updatedAt
});
exports.default = ExamResponses;

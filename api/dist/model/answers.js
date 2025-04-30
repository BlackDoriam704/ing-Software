"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("../db/app")); // Asegúrate de que la ruta sea correcta
class Answers extends sequelize_1.Model {
}
Answers.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    response_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    question_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_answer: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    is_correct: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Valor predeterminado para indicar si es correcta
    },
}, {
    sequelize: app_1.default,
    modelName: 'answers',
    timestamps: false, // Si no usas createdAt y updatedAt
});
exports.default = Answers;

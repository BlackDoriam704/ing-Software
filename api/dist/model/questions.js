"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("../db/app")); // Asegúrate de que la ruta sea correcta
class Questions extends sequelize_1.Model {
}
Questions.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    exam_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    question_text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    option_a: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    option_b: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    option_c: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    option_d: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correct_answer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: app_1.default,
    modelName: 'questions',
    timestamps: false,
});
exports.default = Questions;

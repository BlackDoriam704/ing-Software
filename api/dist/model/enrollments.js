"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("../db/app")); // Asegúrate de que la ruta sea correcta
class Enrollments extends sequelize_1.Model {
}
Enrollments.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    course_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    enrolled_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: app_1.default,
    modelName: 'enrollments',
    timestamps: false, // Si no usas createdAt y updatedAt
});
exports.default = Enrollments;

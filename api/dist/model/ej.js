"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("../db/app"));
class Ejs extends sequelize_1.Model {
}
Ejs.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: app_1.default,
    modelName: 'ejs', // Nombre del modelo
    tableName: 'ejs', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilitar timestamps
});
exports.default = Ejs;

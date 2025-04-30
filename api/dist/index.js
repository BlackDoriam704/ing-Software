"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serve_1 = __importDefault(require("./model/serve"));
const app_1 = __importDefault(require("./db/app"));
const server = new serve_1.default();
app_1.default.authenticate()
    .then(() => {
    console.log('Connection to the database has been established successfully.');
    return app_1.default.sync({ force: false });
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});

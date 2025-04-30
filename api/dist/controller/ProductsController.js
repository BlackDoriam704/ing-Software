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
const products_1 = __importDefault(require("../model/products"));
class ProductsController {
}
_a = ProductsController;
// Obtener todos los productos
ProductsController.getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_1.default.findAll();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
});
// Obtener un producto por ID
ProductsController.getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
});
// Crear un nuevo producto
ProductsController.createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, price, stock } = req.body;
        const newProduct = yield products_1.default.create({ description, price, stock });
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error });
    }
});
// Actualizar un producto por ID
ProductsController.updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { description, price, stock } = req.body;
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        yield product.update({ description, price, stock });
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
});
// Eliminar un producto por ID
ProductsController.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield products_1.default.findByPk(id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        yield product.destroy();
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
});
exports.default = ProductsController;

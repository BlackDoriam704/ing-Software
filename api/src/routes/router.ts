import { Router } from 'express';
import CarritoController from '../controllers/carrito.controller';
import CategoriaController from '../controllers/categoria.controller';
import DetallePedidoController from '../controllers/detalle_pedido.controller';
import EnvioController from '../controllers/envio.controller';
import ItemCarritoController from '../controllers/item_carrito.controller';
import PagoController from '../controllers/pago.controller';
import PedidoController from '../controllers/pedido.controller';
import ProductoController from '../controllers/producto.controller';
import UsuarioController from '../controllers/usuario.controller';

const router = Router();
// Crear un nuevo carrito
router.post('/carritos', CarritoController.crearCarrito);
router.get('/carritos', CarritoController.obtenerCarritos);
router.get('/carritos/:id', CarritoController.obtenerCarritoPorId);
router.put('/carritos/:id', CarritoController.actualizarCarrito);
router.delete('/carritos/:id', CarritoController.eliminarCarrito);

router.post('/categorias', CategoriaController.create);
router.get('/categorias', CategoriaController.getAll);
router.get('/categorias/:id', CategoriaController.getById);
router.put('/categorias/:id', CategoriaController.update);
router.delete('/categorias/:id', CategoriaController.delete);

router.post('/detalles-pedido', DetallePedidoController.create);
router.get('/detalles-pedido', DetallePedidoController.getAll);
router.get('/detalles-pedido/:id', DetallePedidoController.getById);
router.put('/detalles-pedido/:id', DetallePedidoController.update);
router.delete('/detalles-pedido/:id', DetallePedidoController.delete);

router.post('/envios', EnvioController.create);
router.get('/envios', EnvioController.getAll);
router.get('/envios/:id', EnvioController.getById);
router.put('/envios/:id', EnvioController.update);
router.delete('/envios/:id', EnvioController.delete);

router.post('/items-carrito', ItemCarritoController.agregarItem);
router.get('/items-carrito', ItemCarritoController.obtenerItems);
router.delete('/items-carrito/:id', ItemCarritoController.eliminarItem);

router.post('/pagos', PagoController.crearPago);
router.get('/pagos', PagoController.obtenerPagos);
router.get('/pagos/:id', PagoController.obtenerPagoPorId);
router.put('/pagos/:id', PagoController.actualizarPago);
router.delete('/pagos/:id', PagoController.eliminarPago);


router.post('/pedidos', PedidoController.create);
router.get('/pedidos', PedidoController.getAll);
router.get('/pedidos/:id', PedidoController.getById);
router.put('/pedidos/:id', PedidoController.update);
router.delete('/pedidos/:id', PedidoController.delete);

router.post('/productos', ProductoController.create);
router.get('/productos', ProductoController.getAll);
router.get('/productos/:id', ProductoController.getById);
router.put('/productos/:id', ProductoController.update);
router.delete('/productos/:id', ProductoController.delete);
 
router.post('/usuarios', UsuarioController.create);
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuarios/:id', UsuarioController.getById);
router.put('/usuarios/:id', UsuarioController.update);
router.delete('/usuarios/:id', UsuarioController.delete);

export default router;
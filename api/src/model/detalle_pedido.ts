import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class DetallePedido extends Model {
  public id!: number;
  public pedidoId!: number;
  public productoId!: number;
  public cantidad!: number;
  public precio!: number;
}

DetallePedido.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pedidoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'DetallePedido',
  timestamps: false,
  tableName: 'detalle_pedido', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default DetallePedido;
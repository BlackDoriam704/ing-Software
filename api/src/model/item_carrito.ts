import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class ItemCarrito extends Model {
  public id!: number;
  public carritoId!: number;
  public productoId!: number;
  public cantidad!: number;
}

ItemCarrito.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  carritoId: {
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
}, {
  sequelize,
  modelName: 'ItemCarrito',
  timestamps: false,
  tableName: 'item_carrito', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default ItemCarrito;
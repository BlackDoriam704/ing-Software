import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app';

class Carrito extends Model {
  public id!: number;
  public usuarioId!: number;
  public total!: number;
}

Carrito.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Carrito',
  timestamps: false,
  tableName: 'carrito',
  freezeTableName: true,
});

export default Carrito;
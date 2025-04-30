import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class Pago extends Model {
  public id!: number;
  public monto!: number;
  public metodo!: string;
  public estado!: string;
  public fecha!: Date;
}

Pago.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Pago',
  timestamps: false,
  tableName: 'pago', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default Pago;
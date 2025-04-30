import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class Envio extends Model {
  public id!: number;
  public direccion!: string;
  public ciudad!: string;
  public codigoPostal!: string;
  public pais!: string;
  public estado!: string;
}

Envio.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoPostal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Envio',
  timestamps: false,
  tableName: 'envio', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default Envio;
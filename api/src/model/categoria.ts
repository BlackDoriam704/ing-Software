import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class Categoria extends Model {
  public id!: number;
  public nombre!: string;
}

Categoria.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Categoria',
  timestamps: false,
  tableName: 'categoria', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default Categoria;
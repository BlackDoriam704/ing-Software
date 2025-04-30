import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app'; // Asegúrate de que la ruta sea correcta

class Opinion extends Model {
  public id!: number;
  public productoId!: number;
  public usuarioId!: number;
  public comentario!: string;
  public calificacion!: number;
}

Opinion.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Opinion',
  timestamps: true,
  tableName: 'opinion', // nombre de la tabla manualmente
  freezeTableName: true, // evita que Sequelize pluralice el nombre
});

export default Opinion;
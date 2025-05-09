import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/app';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: false,
  tableName: 'user',
  freezeTableName: true,
});

export default User;
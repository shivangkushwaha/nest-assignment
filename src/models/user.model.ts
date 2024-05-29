import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';

@Table
export class User extends BaseModel<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
}

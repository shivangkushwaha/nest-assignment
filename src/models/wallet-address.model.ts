import { Column, DataType, Table, ForeignKey } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { User } from './user.model';

@Table
export class WalletAddress extends BaseModel<WalletAddress> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  address: string;
}

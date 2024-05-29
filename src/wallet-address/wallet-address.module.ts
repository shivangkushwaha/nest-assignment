import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';
import { WalletAddress } from '../models/wallet-address.model';
import { User } from '../models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([WalletAddress, User])],
  providers: [WalletAddressService],
  controllers: [WalletAddressController],
})
export class WalletAddressModule {}

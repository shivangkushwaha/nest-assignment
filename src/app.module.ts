import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot(databaseConfig),
    UsersModule,
    WalletAddressModule,
  ],
})
export class AppModule {}

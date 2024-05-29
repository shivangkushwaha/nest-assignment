import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'my_user',
  password: 'my_password',
  database: 'nestjs_db',
  autoLoadModels: true,
  synchronize: true,
};

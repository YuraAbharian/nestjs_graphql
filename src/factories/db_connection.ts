import { ConfigService } from '@nestjs/config';

export default (config: ConfigService) => ({
  type: config.get<string>('db.type'),
  host: config.get<string>('db.host'),
  port: config.get<number>('db.port'),
  username: config.get<string>('db.username'),
  password: config.get<string>('db.password'),
  database: config.get<number>('db.database'),
  entities: [`${__dirname}dist/**/*.entity{.ts,.js}`],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
});

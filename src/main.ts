import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const PORT: number = config.get<number>('port');
  const HOST: string = config.get<string>('host');
  await app.listen(PORT, () => {
    console.log(`SERVER IS UP ON: http://${HOST}:${PORT}`);
  });
}
bootstrap();

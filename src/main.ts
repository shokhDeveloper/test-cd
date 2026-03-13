import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, () =>
      console.log(`Server is running on ${PORT}-port`),
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(`Server failed to start: ${err.message}`);
      process.exit(1);
    }
  }
}
void bootstrap();

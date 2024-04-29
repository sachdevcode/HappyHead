import { Module } from '@nestjs/common';
import { SlugCreatorModule } from './slug-creator/slug-creator.module';

@Module({
  imports: [SlugCreatorModule],
})
export class AppModule {}

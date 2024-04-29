import { Module } from '@nestjs/common';
import { SlugCreatorService } from './slug-creator.service';
import { SlugCreatorController } from './slug-creator.controller';

@Module({
  controllers: [SlugCreatorController],
  providers: [SlugCreatorService],
})
export class SlugCreatorModule {}

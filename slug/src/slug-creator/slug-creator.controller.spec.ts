import { Test, TestingModule } from '@nestjs/testing';
import { SlugCreatorController } from './slug-creator.controller';
import { SlugCreatorService } from './slug-creator.service';

describe('SlugCreatorController', () => {
  let controller: SlugCreatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlugCreatorController],
      providers: [SlugCreatorService],
    }).compile();

    controller = module.get<SlugCreatorController>(SlugCreatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

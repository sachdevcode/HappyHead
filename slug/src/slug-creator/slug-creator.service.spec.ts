import { Test, TestingModule } from '@nestjs/testing';
import { SlugCreatorService } from './slug-creator.service';

describe('SlugCreatorService', () => {
  let service: SlugCreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugCreatorService],
    }).compile();

    service = module.get<SlugCreatorService>(SlugCreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

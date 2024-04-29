import { Controller, Post, Body } from '@nestjs/common';
import { SlugCreatorService } from './slug-creator.service';
import { CreateSlugCreatorDto } from './dto/create-slug-creator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('unique-name-creator')
@Controller('slug-creator')
export class SlugCreatorController {
  constructor(private readonly slugCreatorService: SlugCreatorService) {}

  @Post()
  create(@Body() createSlugCreatorDto: CreateSlugCreatorDto) {
    return this.slugCreatorService.create(createSlugCreatorDto);
  }
}

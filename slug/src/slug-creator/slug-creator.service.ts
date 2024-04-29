import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSlugCreatorDto } from './dto/create-slug-creator.dto';
import { slugGenerator } from 'src/utils/utils.slugFactory';

@Injectable()
export class SlugCreatorService {
  async create(createSlugCreatorDto: CreateSlugCreatorDto) {
    try {
      const {
        dob: dateOfBirth,
        name: firstName,
        favoriteFruit: fruit,
        lastName,
      } = createSlugCreatorDto;

      const slug = await slugGenerator(firstName, lastName, fruit, dateOfBirth);

      return { success: true, statusCode: 200, slug };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSlugCreatorDto {
  @ApiProperty({
    description: 'The is the firstName of the user',
    example: 'Karan',
  })
  @IsNotEmpty({ message: 'this feild can not send without a value' })
  @IsString({ message: 'this feild only except strig value' })
  name: string;

  @ApiProperty({
    description: 'The is the lastName of the user',
    example: 'Sachdev',
  })
  @IsNotEmpty({ message: 'this feild can not send without a value' })
  @IsString({ message: 'this feild only except strig value' })
  lastName: string;

  @ApiProperty({
    description: 'The is the dateOfBirth of the user',
    example: '1997-05-23',
  })
  @IsNotEmpty({ message: 'this feild can not send without a value' })
  @IsString({ message: 'this feild only except strig value' })
  dob: string;

  @ApiProperty({
    description: 'The is the favorite fruit of the user',
    example: 'Apple',
  })
  @IsNotEmpty({ message: 'this feild can not send without a value' })
  @IsString({ message: 'this feild only except strig value' })
  favoriteFruit: string;
}

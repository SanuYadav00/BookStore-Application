import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false })
  price?: number;

  @ApiProperty({ required: false })
  rating?: number;

  @ApiProperty({ required: false })
  publishedDate?: Date;
}

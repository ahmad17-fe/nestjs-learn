import { IsAlpha, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  image: string;
}

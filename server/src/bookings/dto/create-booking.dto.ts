import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  moveDate: string;
}

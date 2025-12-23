import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepo: Repository<Booking>,
  ) {}

  async create(dto: CreateBookingDto) {
    const booking = this.bookingRepo.create(dto);
    await this.bookingRepo.save(booking);

    await this.sendConfirmationEmail(dto);

    return { success: true };
  }

  private async sendConfirmationEmail(dto: CreateBookingDto) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASSWORD,
      },
    });

    await transporter.sendMail({
      to: dto.email,
      subject: 'Booking confirmation',
      text: `Hello ${dto.name}!\n\nYour move is booked for ${dto.moveDate}.`,
    });
  }
}

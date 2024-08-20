import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
import mongoose from 'mongoose';
import { UpdatePatientDto } from './dtos/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}
  @Post()
  createUser(@Body() createpatientDto: CreatePatientDto) {
    console.log(createpatientDto);
    return this.patientsService.createPatient(createpatientDto);
  }

  @Get()
  getPatients() {
    return this.patientsService.getPatients();
  }
  @Get('/fetchPatientByUserId/:id')
  async fetchPatientByUserId(@Param('id') id: string) {
    return this.patientsService.fetchPatientByUserId(id);
  }
  @Get(':id')
  async getPatientById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User Not Found', 404);
    const patient = await this.patientsService.getPatientById(id);
    if (!patient) throw new HttpException('Patient Not Found ', 404);
    return patient;
  }

  @Get('/fetchPatientByUserId/:id')
  async fetchPatientByUserId(@Param('id') id: string) {
    return this.patientsService.fetchPatientByUserId(id);
  }

  @Patch(':id')
  updatePatient(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User Not Found', 404);
    return this.patientsService.updateUser(id, updatePatientDto);
  }
  @Delete(':id')
  async deletePatient(@Param('id') id: string): Promise<void> {
    return this.patientsService.deletePatient(id);
  }
}

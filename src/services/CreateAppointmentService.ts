import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * [X] Recebimento das informações
 * [X] Tratativa de erros/exceções
 * [X] Acesso ao repositório
 */

interface Request {
  provider: string;
  date: Date;
}

// SOLID
// Single Responsability Principle
// Dependence Invertion Principle

/**
 * Dependency Inversion (SOLID)
 */

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentdDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentdDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentdDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;

import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule, DatePipe],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
    }
  }

  deleteAppointment(index:number){
    this.appointments.splice(index, 1);
  }
}

import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList {
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment [] = []
  addAppointment(){
    alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
  }

}

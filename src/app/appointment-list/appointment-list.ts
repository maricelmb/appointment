import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentList {
  appointment: Appointment = {
    id: 1,
    title: "Take cat for a walk",
    date: new Date('2023-02-14')
  };

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppointmentList } from './appointment-list/appointment-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AppointmentList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('appointment');
}

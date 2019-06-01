import { Component } from '@angular/core';
import { BookingService } from '@services/booking.service';
import { Customer } from '@models/customer/customer';
import { Room } from '@models/room/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bravo Motel';
  bookingService = new BookingService();
  customer: Customer;
  room: Room;

  customerName: string;
  numOfPets: number;
  bedsRequested: number;  accessibleRoom: boolean;

  constructor() {
  this.customerName = 'Lisa Lemons';
  this.numOfPets = 2;
  this.bedsRequested = 3;
  this.accessibleRoom = true;
  }

  bookRoom() {
    this.customer = new Customer(this.customerName, this.numOfPets);
    this.room = this.bookingService.bookRoom(this.customer, this.bedsRequested);
  }
}

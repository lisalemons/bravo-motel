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
  bedsRequested: number;
  accessibleRoom: boolean;
  totalCost: number;

  constructor() {
    this.customerName = 'Lisa Lemons';
    this.numOfPets = 0;
    this.bedsRequested = 1;
    this.accessibleRoom = true;
  }

  bookRoom() {
    this.customer = new Customer(this.customerName, this.numOfPets);
    this.customer.customerRequestedAccessible = this.accessibleRoom;
    this.room = this.bookingService.bookRoom(this.customer, this.bedsRequested);
    console.log("Customer: ", this.customer, "Room: ", this.room);
    this.totalCost = this.bookingService.calculateTotal(this.customer.numberOfPets, this.room.beds);
  }
}

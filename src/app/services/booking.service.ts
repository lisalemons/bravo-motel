import { Injectable } from '@angular/core';
import { Room } from '@models/room/room';
import { Customer } from '@models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor() {}

  /**
   * Determines the cost of the room based on the
   * customer's wants and needs.
   * @param customer The customer bookimng the room
   */
  bookRoom(customer: Customer, bedsDesired: number): Room{
    console.log(customer);
    let roomLevel;
    // Book a room
    if (customer.numberOfPets || customer.customerRequestedAccessible) {
      roomLevel = 1;
    } else {
      roomLevel = 2;
    }

    return new Room(roomLevel, bedsDesired);
  }

  /**
   * Calculates the total cost of the room.
   * @param numPets Number of pets, a max of 2 allowed
   * @param numBeds Number of beds, a max of 3 available
   */
  calculateTotal(numPets: number, numBeds: number): number {
    // Calculate total
    let total = 0;
    return total;
  }
}

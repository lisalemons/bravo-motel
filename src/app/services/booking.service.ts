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
  bookRoom(customer: Customer, bedsDesired: number): Room {
    let roomLevel: number;

    // Book a room
    if (customer.customerRequestedAccessible || customer.numberOfPets > 0) {
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

    if (numPets > 0 && numPets < 3) {
      total += (numPets * 20);
    }

    switch (numBeds) {
      case 1:
        total += 50;
        break;
      case 2:
        total += 75;
        break;
      case 3:
        total += 90;
        break;
      default:
        break;
    }

    return total;
  }
}

import { Customer } from '../customer/customer';

export class Room {
  level: number;
  beds: number;

  private bookedBy: Customer;

  /**
   * A modest motel room. It can be booked by a customer.
   * @param level The level # this room is on (1 or 2)
   * @param beds The # of beds the room has (1, 2, 3)
   */
  constructor(level: number, beds: number) {
    this.level = level;
    this.beds = beds;
  }

  /**
   * Gets the current customer that booked the room
   */
  get roomBookedBy(): Customer {
    return this.bookedBy;
  }

  /**
   * Books the room to the booker
   * @param booker The customer that is reserving the room
   */
  set roomBookedBy(booker: Customer) {
    this.bookedBy = booker;
  }
}

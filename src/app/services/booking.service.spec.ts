import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { Room } from '@models/room/room';
import { Customer } from '@models/customer/customer';

describe('BookingService', () => {
  let testCustomer: Customer;
  let bookingService: BookingService;
  let testRoom: Room;
  beforeEach(() =>{
    TestBed.configureTestingModule({});
    testCustomer = TestBed.get(Customer);
    bookingService = TestBed.get(BookingService);
    testRoom = TestBed.get(testRoom);
  });

  it('should be created', () => {
    expect(bookingService).toBeTruthy();
  });

  it('should book a level 1 room', () => {
    testCustomer.customerRequestedAccessible = true;
    this.service.bookRoom(this.testCustomer);
    expect(testRoom.level).toEqual(1);
  });

  it('should book a 3 bed room', () => {
    expect(testRoom.beds).toEqual(3);
  });

  it('should calculate the room costs 75', () => {
    expect(bookingService.calculateTotal(0, 2)).toEqual(75);
  });

  it('should calculate the room costs 130', () => {
    expect(bookingService.calculateTotal(2, 3));
  });
});

import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { Customer } from '@models/customer/customer';

describe('BookingService', () => {
  let testCustomer: Customer;
  let bookingService: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
          BookingService,
          {
            provide: Customer,
            useValue: new Customer('Lisa Lemons')
          }
        ]
    });
    testCustomer = TestBed.get(Customer);
    bookingService = TestBed.get(BookingService);
  });

  it('should be created', () => {
    expect(bookingService).toBeTruthy();
  });

  it('should book a level 1 room', () => {
    testCustomer.customerRequestedAccessible = true;
    const testRoom = bookingService.bookRoom(testCustomer, 1);
    expect(testRoom.level).toEqual(1);
  });

  it('should book a 3 bed room', () => {
    const testRoom = bookingService.bookRoom(testCustomer, 3);
    expect(testRoom.beds).toEqual(3);
  });

  it('should calculate the room costs 50', () => {
    testCustomer.numberOfPets = 0;
    testCustomer.numberOfBeds = 1;
    expect(bookingService.calculateTotal(
      testCustomer.numberOfPets,
      testCustomer.numberOfBeds))
    .toEqual(50);
  });

  it('should calculate the room costs 70', () => {
    testCustomer.numberOfPets = 1;
    testCustomer.numberOfBeds = 1;
    expect(bookingService.calculateTotal(
      testCustomer.numberOfPets,
      testCustomer.numberOfBeds))
    .toEqual(70);
  });

  it('should calculate the room costs 115', () => {
    testCustomer.numberOfPets = 2;
    testCustomer.numberOfBeds = 2;
    expect(bookingService.calculateTotal(
      testCustomer.numberOfPets,
      testCustomer.numberOfBeds))
    .toEqual(115);
  });

  it('should calculate the room costs 90', () => {
    testCustomer.numberOfPets = 0;
    testCustomer.numberOfBeds = 3;
    expect(bookingService.calculateTotal(
      testCustomer.numberOfPets,
      testCustomer.numberOfBeds))
    .toEqual(90);
  });

  it('should calculate the room costs 130', () => {
    testCustomer.numberOfPets = 2;
    testCustomer.numberOfBeds = 3;

    expect(bookingService.calculateTotal(
      testCustomer.numberOfPets,
      testCustomer.numberOfBeds))
    .toEqual(130);
  });
});

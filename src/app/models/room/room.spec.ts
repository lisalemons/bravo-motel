import { Room } from './room';
import { Customer } from '@models/customer/customer';

describe('Room', () => {

  it('should create an instance', () => {
    expect(new Room(1, 3)).toBeTruthy();
  });

  it('should not have a customer booked', () => {
    let testRoom = new Room(1, 1);
    expect(testRoom.roomBookedBy).toBeUndefined();
  });

  it ('should be booked by test customer', () => {
    let testCustomer = new Customer('Lisa Lemons'),
        testRoom = new Room(1, 1);
    testRoom.roomBookedBy = testCustomer;
    expect(testRoom.roomBookedBy).toBe(testCustomer);
  });
});

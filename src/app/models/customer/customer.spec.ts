import { Customer } from './customer';

describe('Customer', () => {
  const lisaLemonsName = 'Lisa Lemons';
  it('should create an instance', () => {
    expect(new Customer(lisaLemonsName)).toBeTruthy();
  });

  it('should indicate customer requested accessible room', () => {
    const lisaLemons = new Customer(lisaLemonsName);
    lisaLemons.customerRequestedAccessible = true;
    expect(lisaLemons.customerRequestedAccessible).toEqual(true);
  });

  it('should indicate customer did not request accessible room', () => {
    const lisaLemons = new Customer(lisaLemonsName);
    lisaLemons.customerRequestedAccessible = false;
    expect(lisaLemons.customerRequestedAccessible).toEqual(false);
  });

  it ('should have no idea if customer requested accessible room', () => {
    expect(new Customer(lisaLemonsName).customerRequestedAccessible).toBeUndefined();
  })
});

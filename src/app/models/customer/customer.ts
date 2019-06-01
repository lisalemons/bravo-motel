export class Customer {
  name: string;
  numberOfPets: number;
  numberOfBeds: number;

  private requestedAccessible: boolean;

  /**
   * A customer of Bravo Motel.
   * @param name The customer's name
   * @param numberOfPets # of customer's furry guests, max of 2
   */
  constructor(name: string, numberOfPets: number = 0) {
    this.name = name;
    this.numberOfPets = numberOfPets;
  }

  /**
   * Does the customer need a wheelchair accessible room?
   */
  set customerRequestedAccessible(requested: boolean) {
    this.requestedAccessible = requested;
  }

  get customerRequestedAccessible(): boolean {
    return this.requestedAccessible;
  }
}

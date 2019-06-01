export class Customer {
  name: string;
  numberOfPets: number;
  numberOfBeds: number;

  private requestedAccessible: boolean;

  /**
   * A customer of Bravo Motel.
   * @param numberOfPets 0 - 2 pets can stay with the customer
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

export class Customer {
  name: string;
  numberOfPets: number;
  numberOfBeds: number;

  private requestedAccessible: boolean;

  /**
   *
   * @param name
   * @param numberOfPets 0 - 2 pets can stay with the customer
   * @param numberOfBeds 1 - 3 Bed rooms are available
   */
  constructor(name: string, numberOfPets: number = 0, numberOfBeds: number = 1) {
    this.name = name;
    this.numberOfPets = numberOfPets
    this.numberOfBeds = numberOfBeds;
  }

  /**
   * Does the customer need a wheelchair accessible room?
   */
  set customerRequestedAccessible(requested: boolean) {
    this.requestedAccessible = requested;
  }

  get customerRequestedAccessible() : boolean {
    return this.requestedAccessible;
  }
}

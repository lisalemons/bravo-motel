export class Customer {
  name: string;
  numberOfPets: number;
  private requestedAccessible: boolean;

  constructor(name: string, numberOfPets: number = 0) {
    this.name = name;
    this.numberOfPets = numberOfPets
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

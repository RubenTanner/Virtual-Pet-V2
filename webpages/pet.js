// A class for the pet
export class Pet {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    this.hunger = 0;
    this.sleep = 10;
    this.happiness = 5;
  }

  // Method to check if the pet is alive
  isAlive() {
    return this.hunger < 10 && this.sleep > 0 && this.happiness > 0;
  }
  // Set the pet's stats to decay over time
  setDecay() {
    this.hunger--;
    this.sleep--;
    this.happiness--;
    if (!this.isAlive()) {
      this.alive = false;
    }
  }
}

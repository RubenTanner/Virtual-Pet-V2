// A class for the pet
export class Pet {
  constructor(name, owner) { // Constructor for the pet
    this.name = name;
    this.owner = owner;
    this.hunger = 5;
    this.sleep = 5;
    this.happiness = 5;
    this.cleanliness = 5;
    this.alive = true;
  }
  
  // Check if the pet is alive or dead
  isAlive() {
    return this.hunger > 0 && this.sleep > 0 && this.happiness > 0 && this.cleanliness > 0;
  }
  
  // Set the pet's stats to decay over time
  setDecay() {
    this.hunger--;
    this.sleep--;
    this.happiness--;
    this.cleanliness--;
    if (!this.isAlive()) {
      this.alive = false;
    }
  }
  
  // Reset the pet's stats to their initial values and set the pet as alive
  resetGame() {
    this.hunger = 5;
    this.sleep = 5;
    this.happiness = 5;
    this.cleanliness = 5;
    this.alive = true;
  }
}

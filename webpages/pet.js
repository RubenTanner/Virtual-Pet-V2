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

  // Method to decrease the pet's stats over time
  setDecay() {
    // loops over the stats decreasing them every 5 seconds
    setInterval(() => {
      this.hunger++;
      this.sleep--;
      this.happiness--;
    }, 2000);
  }

  // Method to update the pet's stats when the player interacts with the pet
  /**
   * Updates the pet's status
   * @param {int} hunger - The hunger of the pet
   */
  setUpdate(hunger, sleep, happiness) {
    this.hunger += hunger;
    this.sleep += sleep;
    this.happiness += happiness;
  }
}

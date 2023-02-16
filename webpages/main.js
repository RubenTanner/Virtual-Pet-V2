let pet;
// A class for the pet
class Pet {
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
    this.hunger += 1;
    this.sleep -= 1;
    this.happiness -= 1;
  }

  // Method to update the pet's stats when the player interacts with the pet
  setUpdate(hunger, sleep, happiness) {
    this.hunger -= hunger;
    this.sleep += sleep;
    this.happiness += happiness;
  }

}

}

//init function
function init() {
  //Add event listeners for the buttons on the page
  document.querySelector("#submit").addEventListener("click", () => {
    playGame();
  });
  document.querySelector("#eat").addEventListener("click", () => {
    feed();
  });
  document.querySelector("#sleep").addEventListener("click", () => {
    sleep();
  });
  document.querySelector("#play").addEventListener("click", () => {
    play();
  });
}
// Function to start the game
function playGame() {
  // Create a new pet
  let name = document.querySelector("#name").value;
  let owner = document.querySelector("#owner").value;
  if (name === "" || owner === "") {
    alert("Please enter a name and owner for your pet.");
    return;
  }
  let pet = new Pet(name, owner);
  console.log(pet);
  // Update the pet's stats on the page
  document.querySelector("#name").innerHTML = pet.name;
  document.querySelector("#hunger").innerHTML = pet.hunger;
  document.querySelector("#sleep").innerHTML = pet.sleep;
  document.querySelector("#happiness").innerHTML = pet.happiness;
  setTimeout(() => {
    if (pet.isAlive()) {
      pet.setDecay();
      pet.setUpdate();
    } else {
      document.querySelector("#dead").innerHTML = "Your pet is dead!";
    }
  }, 1000);
}
// Function to feed the pet
function feed() {
  // Update the pet's hunger and happiness stats
  pet.setUpdate(-1, 0, 1);

  // Update the pet's stats on the page
  document.querySelector("#hunger").innerHTML = pet.hunger;
  document.querySelector("#happiness").innerHTML = pet.happiness;

}

// Function to put the pet to sleep
function sleep() {
  // Update the pet's sleep and happiness stats
  pet.setUpdate(0, 2, 1);

  // Update the pet's stats on the page
  document.querySelector("#sleep").innerHTML = pet.sleep;
  document.querySelector("#happiness").innerHTML = pet.happiness;

}

// Function to play with the pet
function play() {
  // Update the pet's hunger and happiness stats
  pet.setUpdate(-1, 0, 3);

  // Update the pet's stats on the page
  document.querySelector("#hunger").innerHTML = pet.hunger;
  document.querySelector("#happiness").innerHTML = pet.happiness;

}

window.addEventListener("load", init);

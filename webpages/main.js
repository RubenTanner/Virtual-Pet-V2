import { Pet } from "./pet.js";
let pet;

  // Method to update the pet's stats when the player interacts with the pet
  setUpdate(hunger, sleep, happiness) {
    this.hunger += hunger;
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
  const name = document.querySelector("#pet-name").value;
  const owner = document.querySelector("#owner").value;
  if (name === "" || owner === "") {
    alert("Please enter a name and owner for your pet.");
    return;
  }
  let pet = new Pet(name, owner);
  console.log(pet);
  // Update the pet's stats on the page
  document.querySelector("#pet-name").textContent = pet.name;
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#sleep").textContent = pet.sleep;
  document.querySelector("#happiness").textContent = pet.happiness;
  setTimeout(updatePet, 1000);
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
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#happiness").textContent = pet.happiness;

}

// Function to put the pet to sleep
function sleep() {
  // Update the pet's sleep and happiness stats
  pet.setUpdate(0, 2, 1);

  // Update the pet's stats on the page
  document.querySelector("#sleep").textContent = pet.sleep;
  document.querySelector("#happiness").textContent = pet.happiness;

}

// Function to play with the pet
function play() {
  // Update the pet's hunger and happiness stats
  pet.setUpdate(-1, 0, 3);

  // Update the pet's stats on the page
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#happiness").textContent = pet.happiness;

}

window.addEventListener("load", init);

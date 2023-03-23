import { Pet } from "./pet.js";
let pet;
let currentState;

// Update the pet's image based on the current game state
function updatePetImage() {
  const petDiv = document.getElementById("pet-div");
  let imageSrc = "";
  switch (currentState) {
    case "eating":
      imageSrc = "assets/eating.svg";
      break;
    case "hungry":
      imageSrc = "assets/hungry.svg";
      break;
    case "happy":
      imageSrc = "assets/happy.svg";
      break;
    case "sad":
      imageSrc = "assets/sad.svg";
      break;
    case "playing":
      imageSrc = "assets/playing.svg";
      break;
    case "sleeping":
      imageSrc = "assets/sleeping.svg";
      break;
    default:
      imageSrc = "assets/idle.svg";
      break;
  }
  petDiv.innerHTML = `<img src="${imageSrc}" alt="pet">`;
}

//init function
function init() {
  //Add event listeners for the buttons on the page
  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", playGame);
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
  const owner = document.querySelector("#owner-name").value;
  if (name === "" || owner === "") {
    alert("Please enter a name and owner for your pet.");
    return;
  }
  pet = new Pet(name, owner); // Create a new pet

  console.log(pet);
  // Update the pet's stats on the page
  document.querySelector("#pet-name").textContent = pet.name;
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#sleep").textContent = pet.sleep;
  document.querySelector("#happiness").textContent = pet.happiness;
  // Show the stats div
  document.getElementById("stats").style.display = "block";

   // Set a timer to update the pet's stats and image every second
   setInterval(() => {
    if (pet.isAlive()) {
      pet.setDecay();
      updatePetImage();
      // Update the pet's stats on the page
      document.querySelector("#hunger").textContent = pet.hunger;
      document.querySelector("#sleep").textContent = pet.sleep;
      document.querySelector("#happiness").textContent = pet.happiness;
    } else {
      // If the pet is dead, stop the timer and show a message
      clearInterval(timer);
      document.querySelector("#dead").textContent = "Your pet is dead!";
    }
  }, 1000);
}
// Function to feed the pet
function feed() {
  currentState = "feeding";
  // Update the pet's hunger and happiness stats
  pet.setUpdate(1, 0, 1);

  // Update the pet's stats on the page
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#happiness").textContent = pet.happiness;

  updatePetImage();
}

// Function to put the pet to sleep
function sleep() {
  currentState = "sleeping";
  // Update the pet's sleep and happiness stats
  pet.setUpdate(0, 2, 1);

  // Update the pet's stats on the page
  document.querySelector("#sleep").textContent = pet.sleep;
  document.querySelector("#happiness").textContent = pet.happiness;

  updatePetImage();
}

// Function to play with the pet
function play() {
  currentState = "playing";
  // Update the pet's hunger and happiness stats
  pet.setUpdate(-1, 0, 3);

  // Update the pet's stats on the page
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#happiness").textContent = pet.happiness;

  updatePetImage();
}

// window.addEventListener("load", init);
init();

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
  const owner = document.querySelector("#owner").value;
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
  // debugger;
  document.getElementById('hungerMeter').value = pet.hunger;
  document.getElementById('sleepMeter').value = pet.sleep;
  document.getElementById('happinessMeter').value = pet.happiness;
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
// Feed the pet
function feed() {
  currentState = "eating";
  pet.hunger += 2;
  pet.happiness += 1;
  if (pet.hunger > 8) {
    currentState = "sad";
  } else if (pet.hunger > 4) {
    currentState = "happy";
  }
}

function play() {
  currentState = "playing";
  pet.happiness += 3;
  pet.hunger -= 1;
  pet.sleep -= 1;
  if (pet.happiness > 8) {
    currentState = "happy";
  } else {
    currentState = "idle";
  }
}

function sleep() {
  currentState = "sleeping";
  pet.sleep += 2;
  pet.happiness += 1;
  if (pet.sleep > 8) {
    currentState = "happy";
  } else {
    currentState = "idle";
  }
}

// window.addEventListener("load", init);
init();

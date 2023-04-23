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
  document.querySelector("#submit").addEventListener("click", () => {
    document.querySelector("#submit").textContent = "Try Again";
  });
  document.querySelector("#eat").addEventListener("click", () => {
    feed();
  });
  document.querySelector("#bed").addEventListener("click", () => {
    sleep();
  });
  document.querySelector("#play").addEventListener("click", () => {
    play();
    counter();
  });
  document.querySelector("#clean").addEventListener("click", () => {
    clean();
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
  document.querySelectorAll("#pet-name").textContent = pet.name;
  document.querySelector("#hunger").textContent = pet.hunger;
  document.querySelector("#sleep").textContent = pet.sleep;
  document.querySelector("#happiness").textContent = pet.happiness;
  document.querySelector("#cleanliness").textContent = pet.cleanliness;
  document.querySelectorAll("#owner").textContent = pet.owner;
  // display the pets stats in a meter
  document.getElementById("hungerMeter").value = pet.hunger;
  document.getElementById("sleepMeter").value = pet.sleep;
  document.getElementById("happinessMeter").value = pet.happiness;
  document.getElementById("cleanlinessMeter").value = pet.cleanliness;

  // Show the stats div
  document.getElementById("stats").style.display = "block";
  // hide the start div
  document.getElementById("start").style.display = "none";

  // Set a timer to update the pet's stats and image every other second
  setInterval(() => {
    if (pet.isAlive()) {
      pet.setDecay();
      updatePetImage();
      // Update the pet's stats on the page
      document.querySelector("#hunger").textContent = pet.hunger;
      document.querySelector("#sleep").textContent = pet.sleep;
      document.querySelector("#happiness").textContent = pet.happiness;
      document.querySelector("#cleanliness").textContent = pet.cleanliness;
      document.getElementById("hungerMeter").value = pet.hunger;
      document.getElementById("sleepMeter").value = pet.sleep;
      document.getElementById("happinessMeter").value = pet.happiness;
      document.getElementById("cleanlinessMeter").value = pet.cleanliness;
    } else {
      // If the pet is dead, stop the timer and show a message
      clearInterval();
      document.getElementById("stats").style.display = "none";
      document.querySelector("#dead").style.display = "block";
      // show the start div again
      document.getElementById("start").style.display = "block";
    }
    // if pet happiness is less than 4, pet is sad
    if (pet.happiness <= 5) {
      currentState = "sad";
    }
  }, 2000);
}
//function that creates a counter for every second the pet is alive
function counter() {
  let seconds = 0;
  setInterval(() => {
    if (pet.isAlive()) {
      seconds++;
    } else {
      clearInterval();
      document.querySelector("#counter").textContent = seconds;
    }
  }, 1000);
}
// Feed the pet
function feed() {
  let timesFed = 0;
  currentState = "eating";
  pet.hunger += 2;
  pet.happiness += 1;
  timesFed++;
  if (pet.hunger > 8) {
    currentState = "sad";
  } else if (pet.hunger > 4) {
    currentState = "happy";
  }
}

function play() {
  let timesPlayed = 0;
  currentState = "playing";
  pet.happiness += 3;
  pet.hunger -= 1;
  pet.sleep -= 1;
  pet.cleanliness -= 1;
  timesPlayed++;
  if (pet.happiness > 8) {
    currentState = "playing";
  } else {
    currentState = "idle";
  }
}

function sleep() {
  let timesSlept = 0;
  currentState = "sleeping";
  pet.sleep += 2;
  pet.happiness += 1;
  timesSlept++;
  if (pet.sleep > 8) {
    currentState = "sleeping";
  } else {
    currentState = "idle";
  }
}

function clean() {
  let timesCleaned = 0;
  currentState = "cleaning";
  pet.cleanliness += 2;
  pet.happiness += 1;
  timesCleaned++;
  if (pet.cleanliness > 8) {
    currentState = "happy";
  } else {
    currentState = "idle";
  }
}
// window.addEventListener("load", init);
init();

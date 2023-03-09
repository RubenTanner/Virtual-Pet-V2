import { Pet } from "./pet.js";
let pet;
let currentState;

function updatePetImage() {
  let imageSrc = "";
  if (currentState === "feeding") {
    imageSrc = "assets/eating.svg";
  } else if ((currentState = "hungry")) {
    imageSrc = "assets/hungry.svg";
  } else if (currentState === "happy") {
    imageSrc = "assets/happy.svg";
  } else if (currentState === "sad") {
    imageSrc = "assets/sad.svg";
  } else if ((currentState = "playing")) {
    imageSrc = "assets/playing.svg";
  } else {
    imageSrc = "assets/idle.svg";
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
  currentState = "playing";
  const petDiv = document.getElementById("pet-div");

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
  setTimeout(updatePet, 1000);

  function updatePet() {
    if (pet.isAlive()) {
      pet.setDecay();
      pet.setUpdate();
    } else {
      document.querySelector("#dead").textContent = "Your pet is dead!";
    }
  }
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

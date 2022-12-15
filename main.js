//below are global variables that are used when the pet is at a certain state
//an svg image of a hungry pet
hungry = (
  <svg>
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    <text x="50" y="50" text-anchor="middle" fill="white" font-size="30">
      HUNGRY
    </text>
  </svg>
);
//an svg of a sleepy pet
sleepy = (
  <svg>
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
      fill="blue"
    />
    <text x="50" y="50" text-anchor="middle" fill="white" font-size="30">
      SLEEPY
    </text>
  </svg>
);
//an svg of a bored pet
bored = (
  <svg>
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
      fill="green"
    />
    <text x="50" y="50" text-anchor="middle" fill="white" font-size="30">
      BORED
    </text>
  </svg>
);
//an svg of a happy pet
happy = (
  <svg>
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
      fill="yellow"
    />
    <text x="50" y="50" text-anchor="middle" fill="white" font-size="30">
      HAPPY
    </text>
  </svg>
);

function eventListeners() {
  //listen for the start button to be clicked
  document.querySelector("#create").addEventListener("click", () => {
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

function playGame() {
  //start the game by creating a new pet
  createPet();
  //updates the pets image depending on the pet's stats
  if (pet.hunger <= 5) {
    document.querySelector("#pet").src = hungry;
  } else if (pet.sleep <= 5) {
    document.querySelector("#pet").src = sleepy;
  } else if (pet.happiness <= 5) {
    document.querySelector("#pet").src = bored;
  } else {
    document.querySelector("pet").src = happy;
  }

  //loops over the decay drain and update functions
  while (pet.isAlive()) {
    pet.setDecay();
    pet.setUpdate();
  }
  //if the pet is dead, update the page to show that the pet is dead
  document.querySelector("#dead").innerHTML = "Your pet is dead!";
}
function createPet() {
  //take name input from the web page
  let name = document.querySelector("#name").value;
  let owner = document.querySelector("#owner").value;
  const newPet = pet(name, owner);
  //update the page with the new stats from the pet
  document.querySelector("#name").innerHTML = newPet(pet.name),
  document.querySelector("#hunger").innerHTML = newPet(pet.hunger),
  document.querySelector("#sleep").innerHTML = newPet(pet.sleep),
  document.querySelector("#happiness").innerHTML = newPet(pet.happiness);
}

function feed() {
  //first get the current hunger value
  let hunger = document.querySelector("#hunger").innerHTML;
  //then add 1 to the hunger value
  hunger++;
  //update the page with the new hunger value
  document.querySelector("#hunger").innerHTML = hunger;
  //update the pet's image temporarily for about 5 seconds
  document.querySelector("#pet").src = eating;
  setTimeout(() => {
    document.querySelector("#pet").src = resting;
  }, 5000);
}

function pet(name, owner) {
  this.name = name;
  this.owner = owner;
  this.hunger = max(10);
  this.sleep = max(10);
  this.happiness = max(10);
  //sets the natural decay of the pet's stats
  function setDecay() {
    setInterval(() => {
      this.hunger -= 1;
      this.sleep -= 1;
      this.happiness -= 1;
    }, 1000);
  }
}


//sets the interval for the pet's stats to update on the page
function setUpdate() {
  setInterval(() => {
    document.getElementById("hunger").innerHTML = this.hunger;
    document.getElementById("sleep").innerHTML = this.sleep;
    document.getElementById("happiness").innerHTML = this.happiness;
  }, 1000);
}

//checks if the pet is alive
function isAlive() {
  if (this.hunger <= 0 || this.sleep <= 0 || this.happiness <= 0) {
    return false;
  }
  return true;
}

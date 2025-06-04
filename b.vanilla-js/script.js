// Generated with Claude.ai please see their regulatory rules. Do not copy and paste this into enterprise systems. This could contain code protected by copyright

// Counter for new divs
let newDivCounter = 1;

// Function to create a new div
function createNewDiv() {
  // Create new div element
  const newDiv = document.createElement("div");
  newDiv.className = "color-box";
  newDiv.id = "newBox" + newDivCounter;
  newDiv.style.backgroundColor = getRandomColor();
  newDiv.textContent = "New " + newDivCounter;

  // Add click event to the new div
  newDiv.onclick = function () {
    this.style.backgroundColor = getRandomColor();
  };

  // Append to container
  const container = document.getElementById("new-divs-container");
  container.appendChild(newDiv);

  newDivCounter++;
}

// Function to clear all new divs
function clearNewDivs() {
  const container = document.getElementById("new-divs-container");
  container.innerHTML = "";
  newDivCounter = 1;
}

// Function to get a random color
function getRandomColor() {
  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "pink",
    "brown",
    "yellow",
    "cyan",
    "magenta",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
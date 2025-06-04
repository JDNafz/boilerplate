// Generated with Claude.ai please see their regulatory rules. Do not copy and paste this into enterprise systems. This could contain code protected by copyright

// Counter for new divs
let newDivCounter = 1;


const originalBoxes = ["div1", "div2", "div3"];

// Function to display messages
function showMessage(message) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = message + "<br>" + messagesDiv.innerHTML;
}

// Function to change a random original box color
function changeRandomBoxColor() {
  const colorInput = document.getElementById("colorInput");
  const color = colorInput.value || "orange";

  // Pick a random box
  const randomIndex = Math.floor(Math.random() * originalBoxes.length);
  const randomBoxId = originalBoxes[randomIndex];

  // Get the element and change its color
  const selectedBox = document.getElementById(randomBoxId);
  selectedBox.style.backgroundColor = color;

  showMessage(`Changed ${randomBoxId} to ${color}`);
}

// Function to create a new div
function createNewDiv() {
  const colorInput = document.getElementById("colorInput");
  const color = colorInput.value || "gray";

  // Create new div element
  const newDiv = document.createElement("div");
  newDiv.className = "color-box";
  newDiv.id = "newBox" + newDivCounter;
  newDiv.style.backgroundColor = color;
  newDiv.textContent = "New " + newDivCounter;

  // Add click event to the new div
  newDiv.onclick = function () {
    this.style.backgroundColor = getRandomColor();
    showMessage(`Clicked ${this.id} - changed to random color`);
  };

  // Append to container
  const container = document.getElementById("new-divs-container");
  container.appendChild(newDiv);

  showMessage(`Created ${newDiv.id} with color ${color}`);
  newDivCounter++;
}

// Function to change all box colors
function changeAllColors() {
  const colorInput = document.getElementById("colorInput");
  const color = colorInput.value || "teal";

  // Change original boxes
  for (let i = 0; i < originalBoxes.length; i++) {
    const box = document.getElementById(originalBoxes[i]);
    box.style.backgroundColor = color;
  }

  // Change new boxes
  const newBoxes = document.querySelectorAll("#new-divs-container .color-box");
  for (let i = 0; i < newBoxes.length; i++) {
    newBoxes[i].style.backgroundColor = color;
  }

  showMessage(`Changed all boxes to ${color}`);
}

// Function to clear all new divs
function clearNewDivs() {
  const container = document.getElementById("new-divs-container");
  container.innerHTML = "";
  newDivCounter = 1;
  showMessage("Cleared all new divs");
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

// Add click events to original boxes
document.getElementById("box1").onclick = function () {
  this.style.backgroundColor = getRandomColor();
  showMessage("Clicked Box 1 - changed to random color");
};

document.getElementById("box2").onclick = function () {
  this.style.backgroundColor = getRandomColor();
  showMessage("Clicked Box 2 - changed to random color");
};

document.getElementById("box3").onclick = function () {
  this.style.backgroundColor = getRandomColor();
  showMessage("Clicked Box 3 - changed to random color");
};

// Add enter key support to input
document
  .getElementById("colorInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      changeRandomBoxColor();
    }
  });

showMessage("Page loaded! Try the buttons and click on boxes.");

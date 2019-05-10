// Variables

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  // Create the <options> for the years
  const html = new HTMLUI();
  html.displayYears();
});

// Objects

function HTMLUI() {}

// Displays the latest 20 yers in the select
HTMLUI.prototype.displayYears = function() {
  // Max and minimum years
  const max = new Date().getFullYear(),
    min = max - 20;

  console.log(min);

  // Generate the list with the latest 20 years
  const selectYears = document.getElementById("year");

  // Print the values
  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYears.appendChild(option);
  }
};

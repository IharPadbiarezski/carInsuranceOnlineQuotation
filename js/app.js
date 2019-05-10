// Variables
const form = document.getElementById("request-quote");

const html = new HTMLUI();

// Event Listeners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", function() {
    // Create the <options> for the years
    html.displayYears();
  });

  // When the form is submitted
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Read the values from the form
    const make = document.getElementById("make").value;
    const year = document.getElementById("year").value;
    // Read the radio buttons
    const level = document.querySelector('input[name="level"]:checked').value;

    // Check all the fields have something
    if (make === "" || year === "" || level === "") {
      html.displayError("All the field are mandatory");
    } else {
      console.log("Alright");
    }
  });
}

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

// Prints Error
HTMLUI.prototype.displayError = function(message) {
  // create a div
  const div = document.createElement("div");
  div.classList = "error";

  // Insert the message
  div.innerHTML = `
  <p>${message}</p>
  `;

  form.insertBefore(div, document.querySelector(".form-group"));

  // Remove the error
  setTimeout(function() {
    document.querySelector(".error").remove();
  }, 3000);
};

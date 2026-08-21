const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  let isValid = true;

  if (firstName === "") {
    console.log("first name is empty");
    isValid = false;
  }

  if (lastName === "") {
    console.log("last name is empty");
    isValid = false;
  }

  if (email === "") {
    console.log("email is empty");
    isValid = false;
  }

  if (!queryType) {
    console.log("no query type selected");
    isValid = false;
  }

  if (message === "") {
    console.log("message is empty");
    isValid = false;
  }

  if (!consent) {
    console.log("consent not ticked");
    isValid = false;
  }

  if (isValid) {
    console.log("form is valid!");
  }
});

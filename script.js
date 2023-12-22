let submitButton = document.getElementById("submit-button");
let email = document.getElementById("email");
const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;

submitButton.addEventListener("click", () => {
  if (email.value === "") {
    alert("Input field cannot be empty if you intend to subscribe.");
    return false;
  } else {
    if (regex.test(email.value)) {
      alert("Subscribed!");
      return true;
    } else {
      alert("Error: Email address must contain '@', '.', and the domain name must be 3 characters in length.");
      return false;
    }
  }
})
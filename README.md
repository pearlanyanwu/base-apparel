# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Base Apparel](base_apparel.png)

## My process

### Built with

- HTML
- CSS Grid
- JS

### What I learned

In this project, I learned how to validate email input using regex and if-else conditionals.

```js
let submitButton = document.getElementById("submit-button");
let email = document.getElementById("email");
const regex = /^([a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-z]{2,3})$/;

submitButton.addEventListener("click", () => {
  if (email.value === null) {
    alert("Input field cannot be empty if you would like to subscribe.");
    return false;
  } else {
    if (regex.test(email.value)) {
      alert("Subscribed!");
      return true;
    } else {
      alert("Oops! Please ensure this email address contains a '@', a '.', and the domain name is 2-3 characters in length.");
      return false;
    }
  }
})
```

### Useful resources

- [https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/#:~:text=A%20common%20and%20widely%20accepted,Z%5D%7B2%2C4%7D%24%2F%20.](https://www.example.com) - This provided me with one of the most common regex patterns for email validation.

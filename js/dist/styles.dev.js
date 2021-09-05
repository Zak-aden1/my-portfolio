"use strict";

var tab = document.querySelectorAll('.tab');
tab.forEach(function (button) {
  button.addEventListener('click', function (e) {
    button.classList.add('active');
    console.log(button);
  });
});
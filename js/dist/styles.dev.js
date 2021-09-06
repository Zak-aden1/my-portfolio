"use strict";

var tab = document.querySelectorAll('.tab');
var project = document.querySelectorAll('.project_one'); // selecting projects

tab.forEach(function (button) {
  button.addEventListener('click', function (event) {
    // remove previous active class
    var prevActive = document.querySelector('.active');
    prevActive.classList.remove('active'); // add active class to selected button

    button.classList.contains('active') ? button.classList.remove('active') : button.classList.add('active'); // remove previous shown projects

    var prevShow = document.querySelectorAll('.show');
    prevShow.forEach(function (pro) {
      pro.classList.remove('show');
    }); // adding class to show selected project

    var selectedContent = event.currentTarget.dataset.content;
    var currentProjects = document.querySelectorAll(selectedContent);
    currentProjects.forEach(function (pro) {
      pro.classList.add('show');
    });
  });
}); // header fixed after scrolling 
// DYNAMICALLY ADDING FIXED NAVBAR //

var navbar = document.querySelector('header');
var navItems = document.querySelectorAll('li'); // window.addEventListener('scroll', function () {
//     const scrollHeight = window.pageYOffset;
//     const navHeight = navbar.getBoundingClientRect().height;
//     if (scrollHeight > navHeight) {
//         navbar.classList.add('fixed-nav');
//     } else {
//         navbar.classList.remove('fixed-nav'); 
//     }
// });
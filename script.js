function toggleClass(){
  let menu = document.querySelector(".mainMenu");
  menu.classList.toggle("toggleCls");
}
let hamburger = document.querySelector(".ham");
hamburger.addEventListener("click", toggleClass);


function displayHome(){
  document.body.style.backgroundColor = "grey";
}
let h = document.querySelector(".home");
h.addEventListener("click", displayHome);
h.addEventListener("click", toggleClass);

function displayRed(){
  document.body.style.backgroundColor = "red";
}
let r = document.querySelector(".red");
r.addEventListener("click", displayRed);
r.addEventListener("click", toggleClass);
  
function displayOrange(){
  document.body.style.backgroundColor = "orange";
}
let o = document.querySelector(".orange");
o.addEventListener("click", displayOrange);
o.addEventListener("click", toggleClass);

function displayPurple(){
  document.body.style.backgroundColor = "purple";
}
let p = document.querySelector(".purple");
p.addEventListener("click", displayPurple);
p.addEventListener("click", toggleClass);

function displayGreen(){
  document.body.style.backgroundColor = "green";
}
let g = document.querySelector(".green");
g.addEventListener("click", displayGreen);
g.addEventListener("click", toggleClass);




// let toggleNavStatus = false;

// let toggleNav = function () {
//   let getMainMenu = document.querySelector(".nav-main");
//   let getMainMenuUl = document.querySelector(".nav-main ul");
//   let getMainMenuTitle = document.querySelector(".nav-main span");
//   let getMainMenuLinks = document.querySelectorAll(".nav-main li");

//   if (toggleNavStatus === false) {
//     getMainMenuUl.style.visibility = "visible";
//     getMainMenu.style.width = "272px";
//     getMainMenuLinks.style.opacity = "0.5";

//     let arrayLength = getMainMenuLinks.length;
//     for (let i = 0; i < array.length; i++) {
//       getMainMenuLinks[i].style.opacity = "1";
//     }
//     toggleNavStatus = true;
//   } else if (toggleNavStatus === true) {
//     getMainMenu.style.width = "0px";
//     getMainMenuTitle.style.opacity = "0";

//     let arrayLength = getMainMenuLinks.length;
//     for (let i = 0; i < array.length; i++) {
//       getMainMenuLinks[i].style.opacity = "0";
//     }

//     getMainMenuUl.style.visibility = "hidden";

//     toggleNavStatus = false;
//   }
// };

// /* let body = document.querySelector('.blue-background');
// let buttonChangeBg = document.querySelector('.btn-background');
// // let button = document.getElementById('mybutton');

// // button.addEventListener("click", function(){
// //     alert('Button clicked!');
// // });

// var mybutton = document.getElementById("mybutton");
// mybutton.addEventListener("click", function () {
//   alert("Button Clicked");
// });


// buttonChangeBg.addEventListener("click", function() {
//     body.classList.toggle("red-background");
// })


// //     body.classList.add = ("redBackground");
// //     alert("Button 2 Clicked");
// //     console.log(body);
// // // mybutton2.addEventListener("click", function () {

// // });
// // var myButton2 = function () {
// //     const bodyElement = document.body;
// //     bodyElement.classList.add("red-background");
// //     alert("Button Clicked");
// //   }; 

// */

// 1. getAttribute() - atribut qiymatini olish
// let link = document.querySelector(".link");
// let href = link.getAttribute("href");
let btn = document.querySelector(".btn");
// let change = document.querySelector("#change");
// let input = document.querySelector(".input");

let bar = document.querySelector("i");
let ui = document.querySelector("ul");
let heading = document.querySelector(".heading");

bar.addEventListener("click", () => {
  ui.classList.toggle("bar");
});

let box = document.querySelector(".box");

// // 1. classList.add() - klass qo'shish
// box.classList.add('new-class');

// // 2. classList.remove() - klassni olib tashlash
// box.classList.remove('old-class');

// // 3. classList.toggle() - klassni yoqish/o'chirish
// box.classList.toggle('toggle-class')

// change.addEventListener("click", () => {
//   input.setAttribute("type", "text");
//   console.log("Nimadur boldi");
// });

//1 link.getAttribute("href");
//2 link.setAttribute("href", "ndhfbhjbfhjdbhj");
//3 link.removeAttribute("nimadur");

btn.addEventListener("click", () => {
  heading.textContent = "Yes, Bilol only lazy programer ❌❌❌";

  box.style.with = "1000";
  box.style.background = "red";
  box.innerHTML = `<img src="https://media.licdn.com/dms/image/D4E03AQFv_6N6DdOCVg/profile-displayphoto-shrink_200_200/0/1710222836467?e=2147483647&v=beta&t=bVzVGBVkS0pFQJ3gPWLZW3UsMoMzfIsHp6P8QToAKoA" alt="This is best programer" />`;
});

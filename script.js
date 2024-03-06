// const changeNames = document.querySelector('.skills__list');
// changeNames.children[4].firstElementChild.innerText = 'Node js';
// changeNames.children[5].firstElementChild.textContent = 'Mongo DB';

// // ---
// const newSkill = `
// <li data-name="TypeScript" class="skills__column">
//   <h2 class="skills__title">TypeScript</h2>
//   <span class="skills__years">2 years</span>
// </li>
// `;
// let addSkill = document.querySelector('[data-name="Javascript"]');
// addSkill.insertAdjacentHTML('afterend',newSkill);

// // ---

// const remmoveElement = document.querySelector('.find-out-link');
// console.log(remmoveElement);
// remmoveElement.remove();

// // ---

// const imageWidth = document.querySelector('.bio__pic');
// console.log(imageWidth);
// imageWidth.style.width = '36rem'

// // ---

// const skillsList = document.querySelectorAll('.skills__column');
// console.log(skillsList);
// [...skillsList].map ((item) => {
//   item.addEventListener('click', () => {
//     const activeElement = document.querySelector('.underline');
//     if(activeElement){
//       activeElement.classList.remove('underline');
//     }
//     item.classList.add('underline');
//   })
// }
// );

myFunc(); 
var myFunc = function() {
      console.log("Hello!");
}
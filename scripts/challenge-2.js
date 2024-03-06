const skillsArray = [
  {
    name: 'HTML',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'CSS',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'Javascript',
    experience: '2013',
    type: 'frontend',
  },
  {
    name: 'React',
    experience: '2016',
    type: 'frontend',
  },
  {
    name: 'Redux',
    experience: '2017',
    type: 'frontend',
  },
  {
    name: 'React Testing Library',
    experience: '2020',
    type: 'frontend',
  },
  {
    name: 'Node.js',
    experience: '2020',
    type: 'bakend',
  },
  {
    name: 'Express.js',
    experience: '2020',
    type: 'backend',
  },
  {
    name: 'Mongodb',
    experience: '2020',
    type: 'backend',
  },
];

// Add skills dynamically

// Calculate years of experience automatically

/* ✨ Bonus ✨ */
// Add filters to skills section

function getExperienceYears (years){
 const currentYear = new Date().getFullYear();
 return currentYear - years;
}

const skillsSection = document.querySelector("#skills");
// const skillsList =  `
// <ul class="skills__list">
//    /*<li class="skills__column" data-type = "frontend" data-name="${skillsArray[0].name}">
//    <h2 class="skills__title">${skillsArray[0].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[0].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[1].name}">
//    <h2 class="skills__title">${skillsArray[1].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[1].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[2].name}">
//    <h2 class="skills__title">${skillsArray[2].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[2].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[3].name}">
//    <h2 class="skills__title">${skillsArray[3].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[3].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[4].name}">
//    <h2 class="skills__title">${skillsArray[4].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[4].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[5].name}">
//    <h2 class="skills__title">${skillsArray[5].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[5].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "frontend" data-name="${skillsArray[6].name}">
//    <h2 class="skills__title">${skillsArray[6].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[6].experience)} years</span>
//    </li>
//   <li class="skills__column" data-type = "backend" data-name="${skillsArray[7].name}">
//    <h2 class="skills__title">${skillsArray[7].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[7].experience)} years</span>
//    </li>
//    <li class="skills__column" data-type = "backend" data-name="${skillsArray[8].name}">
//    <h2 class="skills__title">${skillsArray[8].name}</h2>
//    <span class="skills__years">${getExperienceYears(skillsArray[8].experience)} years</span>
//    </li>*/
// </ul>`;
const skillsList =  `<ul class="skills__list"></ul>`;
fragment = document.createRange().createContextualFragment(skillsList);
skillsSection.appendChild(fragment);
skillsListElement = skillsSection.querySelector(".skills__list");

for(let i = 0; i < skillsArray.length ; i++){
  skillsListElement.insertAdjacentHTML("beforeend",
  ` <li class="skills__column" data-type = ${skillsArray[i].type} data-name="${skillsArray[i].name}">
    <h2 class="skills__title">${skillsArray[i].name}</h2>
    <span class="skills__years">${getExperienceYears(skillsArray[i].experience)} years</span>
  </li>`);
}


function toggleSkillsButton (buttonElement){

  if (buttonElement !== allSkillsButton) {
    allSkillsButton.classList.remove("skills__button--isActive");
  }
  if (buttonElement !== frontEndSkillsButton) {
    frontEndSkillsButton.classList.remove("skills__button--isActive");
    // skillsListElement.classList.add("backend");
    
  }
  if (buttonElement !== backEndSkillsButton) {
    backEndSkillsButton.classList.remove("skills__button--isActive");
    // skillsListElement.classList.add("frontend");
  }

  buttonElement.classList.add("skills__button--isActive");
};

const allSkillsButton = document.querySelector('[data-type ="all"]');
const frontEndSkillsButton = document.querySelector('[data-type ="frontend"]');
const backEndSkillsButton = document.querySelector('[data-type ="backend"]');
 allSkillsButton.addEventListener("click",()=>{
  toggleSkillsButton(allSkillsButton);
  skillsListElement.classList.remove("frontend");
  skillsListElement.classList.remove("backend");
 })
frontEndSkillsButton.addEventListener("click", () => {
  toggleSkillsButton(frontEndSkillsButton);
  skillsListElement.classList.add("frontend");
  skillsListElement.classList.remove("backend");
});
backEndSkillsButton.addEventListener("click", () => {
  toggleSkillsButton(backEndSkillsButton);
  skillsListElement.classList.add("backend");
  skillsListElement.classList.remove("frontend");

});

// function upperName(name) {
//   return name.toUpperCase();
// }

// const upperName = function(name) {
//   return name.toUpperCase();
// }

// const upperName = name => {
//   return name.toUpperCase();
// }

// const upperName = (name, lastName) => {
//   return name.toUpperCase() + ' ' + lastName.toUpperCase();
// }

// const upperName = name => name.toUpperCase();

// const countLetters = word => word.length;

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent(){
    this.menuElement.addEventListener('click',(event) =>{
      event.target.classList.add(this.activeClass);
    })
  }
}

const menu = new Menu('.principal');

console.log(menu);
console.log(menu.menuElement);
menu.addActiveEvent();
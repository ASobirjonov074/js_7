// let range = document.querySelector('input')
// let modules = document.querySelectorAll('.module')

// previousIDX = 0

// range.oninput = () => {
//     let idx = Math.floor(range.value / 10) 

//     modules[previousIDX].classList.remove('active-module')
//     modules[idx].classList.add('active-module')

//     previousIDX = idx
// }

let range = document.querySelector('input')
let modules = document.querySelectorAll('.module')
let h1 = document.querySelector('h1')
let foodList = document.querySelector('.food')


// let previousIDX = 0

// range.oninput = () => {
// let idx = Math.floor(range.value / 10)

// // modules[previousIDX].classList.remove( 'active-module')
// // modules[idx].classList.add('active-module')

//     foodList.innerHTML = idx + 1

// // previousIDX = idx
// }

// 8

let patterns = {
    text: /^[a-z ,.'-]+$/i,
    phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
  };
  let inps = document.querySelectorAll(".modal__input");
  inps.forEach((inp) => {
    let names = inp.getAttribute("type");
    inp.onkeyup = () => {
      let pattern = patterns[names];
      if (pattern.test(inp.value) === false) {
        inp.style.border = "1px solid red";
      } else {
        inp.style.border = "1px solid green";
      }
    };
  });
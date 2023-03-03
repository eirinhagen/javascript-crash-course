
// single element
 const form = document.getElementById('my-form');
 console.log(form)

console.log(document.querySelector('.container'))
const x = document.querySelector('h1');
console.log(x)

//multiple selector
console.log( document.querySelectorAll('.item'));
const items =  document.querySelectorAll('.item')

items.forEach((item)=>console.log(item));


const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove()

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerHTML = "Eirin" // the other way to change the text
ul.lastElementChild.innerHTML = "<h1>Hello!</h1>";

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

btn.addEventListener('click',(e) => { 
    e.preventDefault();                                            // first "click " is event and second is the function, e is event-parameter
   // console.log(e.target.className); // target is an actual element
   document.querySelector('#my-form').style.background= '#ccc'
   document.querySelector('body').classList.add('bg-dark')
   document.querySelector('.items').lastElementChild.innerHTML = '<h1>myaw</h1>'
});


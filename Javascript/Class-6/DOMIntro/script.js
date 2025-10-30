// const obj = {
//     html: {
//         head: {
//             title: {

//             }
//         },
//         body: {
//             h1: {

//             },
//             p: {
                
//             },
//             ul: {
//                 li: {

//                 },
//                 li: {

//                 }
//             }
//         }
//     }
// }

// Kebab Case - background-color
// Camel Case - backgroundColor 

const items = document.getElementsByClassName('item');

// console.log(items);

for (let item of items) {
    item.style.fontWeight = 'bold';
}

// Add classes to paragraph

const para = document.querySelector('p');

para.classList.add('para', 'a');
console.log(para.textContent);
console.log(para.innerText);
console.log(para.innerHTML);

const listItems = document.querySelectorAll('li');
console.log(listItems);
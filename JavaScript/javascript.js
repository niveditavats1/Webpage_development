console.log('hello world!')











// If statement
const greet = (firstname, lastname, lang) => {
if (lang=== 'en' && lang !== 'es'){
    console.log('Hello' + firstname + ' ' + lastname);
} else if (lang=== 'es' || lang === 'esp'){
    console.log('Hola'+ 'firstname'+ ' ' + lastname );
} else {
    console.log('language not supported!')
}
}
//ternary if statement: <conditio >? <result if true> : <result if false>
const greet2 = (firstname, lang) => {
    console.log(lang==='en' ? 'Hello' + fistname: 'Hola' + firstname);
}

// Another way for if else (conditional ) statement
const greet3  = (firstname,lang) =>{
switch(lang){
    case "en" :
        console.log('Hello' + firstname);
        break;
    case "es":
        console.log('Hola' + firstname);
        break;
    default:
        console.log('language is not supported')

}

}

greet3('John', 'esp');

// Loop
let fruit = ['banana', 'apple', 3]
for(let i = 0; i < fruit.length; i++)  {
    console.log(fruit[i]);
}

// Whhile Loop

let x = 5
while(x>0) {
    console.log(x);
    x--;
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i <10);

// hoisting
// this will not work

// add(1,3);
// const add = (a,b) => {
//     console.log(a+b);
// }
// this will Work

add(1, 3);
function add(a, b)  {
    console.log(a + b);
}

// Arrays
fruits = ['banana', 'apple', 'mango']
fruits[2]
fruits.push('kiwi');
fruits
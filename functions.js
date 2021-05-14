// let randomStringas = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');

// console.log(randomStringas);

// for (let i = 0; i < randomStringas.length; i++) {
//     let HTML = '';
//     let char = randomStringas.charAt(i);
//     //Kodėl Number(char) gražina true? Šeštadienį pasiklausti Naglio.
//     if (Number(char) || Number(char) + 1) {
//     //     console.log(Number(char));
//     // if ((typeof Number(char)) === "number") {
//         HTML += `<h1 style="display: inline-block;">${char}</h1>`;
//         document.getElementById('konteineris').innerHTML += HTML;
//     } else {
//         HTML = `<br><p>${char}</p>`;
//         document.getElementById('konteineris').innerHTML += HTML;
//     }
// }

// let a = '5jjj';
// let b = "0";
// console.log("type of parseInt: " + typeof parseInt(a, 10));
// console.log("type of Number: " + typeof Number(a));
// console.log(parseInt(a, 10));
// console.log(Number(a));
// console.log(Number(b));


/////////////////////////////////////////////////////////////////
////
//// >>>>>>>>>>> HTML version, with input <<<<<<<<<<<<
////
/////////////////////////////////////////////////////////////////

document.querySelector('#btn').addEventListener('click', function () {
    let number = Number(document.querySelector('#fname').value);
    // console.log(number, typeof number);
    number % 2 === 1 ? makeRhombus(number) : document.getElementById('konteineris').innerHTML = `<h1>Skaičius netinkamas</h1>`;
    });

function makeRhombus(number) {
    document.getElementById('konteineris').innerHTML = ``;
    let symbol = '*';
    let space = '&nbsp;&nbsp;';
    for (let i = 1; i < number + 1; i++) {
        if(i <= Math.floor(number / 2)) {
            let repeatSpace = Math.round(number / 2) - i;
            let row = space.repeat(repeatSpace) + symbol;
            let rowHTML = `<p>${row}</p>`
            document.getElementById('konteineris').innerHTML += rowHTML;
            symbol += '**';
        } else {
            let repeatSpace = i - Math.round(number / 2);
            let row = space.repeat(repeatSpace) + symbol;
            let rowHTML = `<p>${row}</p>`
            document.getElementById('konteineris').innerHTML += rowHTML;
            symbol = symbol.substring(0, symbol.length - 2);
        }
        
    }
}


/////////////////////////////////////////////////////////////////
////
//// >>>>>>>>>>> Default HTML version, without input <<<<<<<<<<<<
////
/////////////////////////////////////////////////////////////////

// let number = 7;

// function checkNumber(value) {
//     value % 2 === 1 ? console.log('Viskas OK!') : console.log('Skaičius netinkamas');
// }
// checkNumber(number);


// let symbol = '*';
// let space = '&nbsp;&nbsp;';

// for (let i = 1; i < number + 1; i++) {
//     if(i <= Math.floor(number / 2)) {
//         let repeatSpace = Math.round(number / 2) - i;
//         let row = space.repeat(repeatSpace) + symbol;
//         let rowHTML = `<p>${row}</p>`
//         document.getElementById('konteineris').innerHTML += rowHTML;
//         symbol += '**';
//     } else {
//         let repeatSpace = i - Math.round(number / 2);
//         let row = space.repeat(repeatSpace) + symbol;
//         let rowHTML = `<p>${row}</p>`
//         document.getElementById('konteineris').innerHTML += rowHTML;
//         symbol = symbol.substring(0, symbol.length - 2);
//     }
    
// }

/////////////////////////////////////////////////////////////////
////
//// >>>>>>>>>>>>>>>>>>  console.log version <<<<<<<<<<<<<<<<<<<<
////
/////////////////////////////////////////////////////////////////

// let symbol = '*';
// let space = ' ';

// for (let i = 1; i < number + 1; i++) {
//     if(i <= Math.floor(number / 2)) {
//         let repeatSpace = Math.round(number / 2) - i;
//         let row = space.repeat(repeatSpace) + symbol;
//         console.log(row);
//         symbol += '**';
//     } else {
//         let repeatSpace = i - Math.round(number / 2);
//         let row = space.repeat(repeatSpace) + symbol;
//         console.log(row);
//         symbol = symbol.substring(0, symbol.length - 2);
//     }  
// }
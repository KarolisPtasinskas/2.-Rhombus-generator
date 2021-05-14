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
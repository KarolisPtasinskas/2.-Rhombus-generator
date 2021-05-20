/////////////////////////////////////////////////////////////////
////
//// >>>>>>>>>>> HTML version, with input <<<<<<<<<<<<
////
/////////////////////////////////////////////////////////////////

//Choose a figure: <select> changes "hidden", "shown" HTML fields

let chooseFigure = document.querySelector('#choose--figure');

chooseFigure.addEventListener('input', function(){
    showHide();
    document.getElementById('figure-container').innerHTML = ``;
    
});

function showHide() {
    let shownElement = document.querySelector('.shown');
    shownElement.classList.remove('shown');
    shownElement.classList.add('hidden');

    let newShownElement = document.querySelector(`.input--${chooseFigure.value}`);
    newShownElement .classList.remove('hidden');
    newShownElement.classList.add('shown');
}

//Function to make a SQUARE

document.querySelector('#btn--rectangle').addEventListener('click', function () {
    let weight = Number(document.querySelector('#rectangle--weight').value);
    let height = Number(document.querySelector('#rectangle--height').value);
    weight && height ? makeRectangle(weight, height) : document.getElementById('figure-container').innerHTML = `<h1>Skaičiai neįvesti arba netinkami</h1>`;
    });


function makeRectangle(weight, height) {
    console.log('KVADRATAS');
    document.getElementById('figure-container').innerHTML = ``;

    let symbol = '*';
    for (let i = 1; i <= height; i++) {
        let row = symbol.repeat(weight);
        let rowHTML = `<p${colorManagement()}>${row}</p$>`
        document.getElementById('figure-container').innerHTML += rowHTML;
    }

}

//Function to make a RHOMBUS

document.querySelector('#btn--rhombus').addEventListener('click', function () {
    let number = Number(document.querySelector('#rhombus--height').value);
    number % 2 === 1 ? makeRhombus(number) : document.getElementById('figure-container').innerHTML = `<h1>Skaičius netinkamas</h1>`;
    });

function makeRhombus(number) {
    document.getElementById('figure-container').innerHTML = ``;
    let symbol = '*';
    let space = '&nbsp;&nbsp;';
    for (let i = 1; i < number + 1; i++) {
        if(i <= Math.floor(number / 2)) {
            let repeatSpace = Math.round(number / 2) - i;
            let row = space.repeat(repeatSpace) + symbol;
            let rowHTML = `<p${colorManagement()}>${row}</p$>`
            document.getElementById('figure-container').innerHTML += rowHTML;
            symbol += '**';
        } else {
            let repeatSpace = i - Math.round(number / 2);
            let row = space.repeat(repeatSpace) + symbol;
            let rowHTML = `<p${colorManagement()}>${row}</p$>`
            document.getElementById('figure-container').innerHTML += rowHTML;
            symbol = symbol.substring(0, symbol.length - 2);
        }
        
    }
}

//If color input is checked - returning colored selected figures lines

function colorManagement() {
    let colorCheck = document.querySelector(`#color--check--${chooseFigure.value}`).checked;
    let colorTag = '';
    function randomColor() {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    return colorCheck ? colorTag = ` style="color: ${randomColor()};"` : colorTag = ``;
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
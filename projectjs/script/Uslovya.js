"use strict";

if (9 == 9) {
    console.log('OK');
} else {
    console.log('Error');

}

if (1) {
    console.log('OK');
} else {
    console.log('Error');

}

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('OK');
// }

// (num === 50 ) ? console.log('OK') : console.log('Error');

const num = 50;
switch (num) {
    case 49: 
           console.log('False');
         break;
    case 100:
        console.log('False');
        break;

    case 51:
        console.log('False');
        break; 
    default: 
        console.log("Not false");
        break;
}
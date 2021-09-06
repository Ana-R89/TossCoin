import React from 'react'


function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails"

}

function fiveHeadsSync() {
    let headsCount = 0
    let attempts = 0
    while (headsCount < 5) {
        attempts++
        let result = tossCoin()
        console.log(`${result} was flipped`)
        if (result === "heasd") {
            headsCount++
        } else {
            headsCount = 0
        }
    }
    return 'It took ${attempts} tries to flip five "heads"'

}

console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync funtion completes")


function fiveHeads() {
    const head = Math.random() > 0.5 ? "heads" : "tails"
    return new Promise((resolve, reject) => {
        setTimeout(
            () => head > 5
                ? resolve(head)
                : reject(new Error("Menor a 5")),
            "heads", "tails"
        )
    });

    promise
        .then(head => console.log(head))
        .catch(error => console.error(error));
}


// getFiveHeads() {
//     const head = Math.random() > 0.5 ? "heads" : "tails"

//     let headsCount = 0
//     let attempts = 0
//     while (headsCount < 5) {
//         attempts++
//         let result = tossCoin()
//         console.log(`${result} was flipped`)
//         if (result === "heasd") {
//             headsCount++
//         } else {
//             headsCount = 0
//         }
//     }

//     return headsCount

// }

// fiveHeads()
// return new Promise((resolve, reject) => {
//     const head = Math.random() > 0.5 ? "heads" : "tails"

//     setTimeout(
//         () => head > 5
//             ? resolve(head)
//             : reject(new Error("Menor a 5")),
//         "heads", "tails"
//     )
// });

// promise
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// console.log("When does this run now?");
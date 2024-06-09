// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));



//-------------------------------------Binary Search--------------------------------------


// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < middleIndex) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))
// console.log(binarySearch([-5, 2, 4, 6, 10], 20))





// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < middleIndex) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(['a', 'b', 'c', 'd'], 'c'));




function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < middleIndex) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

const arr  = [ 10,7,4,11,15]

let sorted = arr.sort((a,b)=>a-b)

console.log(binarySearch(sorted,11));


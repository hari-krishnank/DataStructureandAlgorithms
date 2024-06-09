// Insertion Sort

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToinsert = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > numberToinsert) {
            arr[j + 1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToinsert
    }
}

const arr = [30, 2, 11, 56, 12, 11, 22, 41]
insertionSort(arr)
console.log(arr);


//_____________________________Counting Inversions

// function countInversions(arr) {
//     let count = 0;
//     for (let i = 1; i < arr.length; i++) {
//         let numberToinsert = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToinsert) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//             count++;
//         }
//         arr[j + 1] = numberToinsert;
//     }
//     return count;
// }

// const arr = [1, 20, 6, 4, 5];
// console.log(countInversions(arr));


// ___________________________Smallest element

// function findSmallest(arr) {
//     if (arr.length === 0) {
//         return null;
//     }

//     for (let i = 1; i < arr.length; i++) {
//         let numberToinsert = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToinsert) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = numberToinsert;
//     }

//     return arr[0];
// }

// const arr = [30, 2, 11, 56, 12, 11, 22, 41];
// console.log("The smallest element is:", findSmallest(arr));


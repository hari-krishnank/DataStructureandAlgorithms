// Selection Sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j
            }
        }
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
    }
    return arr
}

const arr = [10, 4, 6, 52, 8, 45, 33]
console.log(selectionSort(arr));


// ________________Descending in selection sort

// function selectionSortDescending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let largest = i;
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] > arr[largest]) {
//                 largest = j;
//             }
//         }
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     }
//     return arr;
// }


// const arr = [10, 4, 6, 52, 8, 45, 33]
// console.log(selectionSortDescending(arr));


// _________________________Smallest Element

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let smallest = i
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] < arr[smallest]) {
//                 smallest = j
//             }
//         }
//         [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
//     }
//     return arr[0]
// }


// const arr = [10, 4, 6, 52, 8, 45, 33]
// console.log('Smallest Element in Array:');
// console.log(selectionSort(arr));

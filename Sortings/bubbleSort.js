
// Bubble Sort

function bubbleSort(arr) {

    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped);
    return arr
}

const arr = [10, 5, 15, 17, 24, 26, 50, 5, 4, 7, 9, 3, 2]
console.log(bubbleSort(arr));



// ________________________________Bubble Sort with Optimized Flag


// function bubbleSort(arr) {
//     const len = arr.length;
//     let swapped;

//     for (let i = 0; i < len; i++) {
//         swapped = false;

//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapped = true;
//             }
//         }

    
//         if (!swapped) {
//             break;
//         }
//     }

//     return arr;
// }

// const arr1 = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(arr1)); 




//___________________________________Bubble Sort with Custom Comparator Function

// function bubbleSort(arr, comparator) {
//     const len = arr.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (comparator(arr[j], arr[j + 1]) > 0) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }


// function descending(a, b) {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0;
// }

// const arr2 = [64, 34, 25, 12, 22, 11, 90];
// console.log(bubbleSort(arr2, descending));

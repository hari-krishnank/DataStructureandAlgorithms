// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(6));
// console.log(recursiveFibonacci(7));




// function reverseString(str) {
//   if (str <= 1) {
//     return str
//   }
//   return reverseString(str.slice(1)) + str[0]
// }

// console.log(reverseString("hari"));


// function recursiveFactorial(n) {
//   if (n === 0) {
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(5));
// console.log(recursiveFactorial(4));



// function reverseArray(arr) {
//   if (arr.length <= 0) {
//     return arr
//   }
//   return reverseArray(arr.slice(1)).concat(arr[0])
// }

// console.log(reverseArray([1,2,3,4,5]));


// function string(str){
//   if(str <= 1) {
//     return str
//   }
//   return string(str.slice(1))+str[0]
// }

// console.log(string('hari'));



// function array (arr) {
//   if(arr.length <= 0){
//     return arr
//   }
//   return array(arr.slice(1)).concat(arr[0])
// }

// console.log(array([1,2,3,4,5]));




// let string  = 'hari' ;
// string = string.charAt(0).toUpperCase() + string.slice(1);
// console.log(string);


// let string = 'hari is cute';
// let words = string.split(' ');
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// string = words.join(' ');
// console.log(string);
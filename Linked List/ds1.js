// let array = [6, 5, 4, 3, 9, 8, 0]
// let arr=[]
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if (array[i]+array[j]===10){
//             arr.push(array[i],array[j])
//         }
//     }
// }
// console.log(arr);

// time complexity = O(n^2)
// space complexity = O(n)


// let array = [6, 5, 4, 3, 9, 8, 0]
// let arr = []
// let targetSum = 10
// let res = []
// for (let i = 0; i < array.length; i++) {
//     let match = targetSum - array[i];
//     if (res[match]) {
//         arr.push(array[i],match);
//     }
//     res[array[i]] = true;

// }

// console.log(arr);




// remove duplicates from array [1,3,5,3,1] in o(n)

// let array =  [1,3,5,3,1]
// let result = new Set(array)
// let ans = [...result]
// console.log(ans);



// let array = [5,10,6,5,7,11,6]

// let element =6
// let index = array.indexOf(element)

// if(index !==-1){
//     array.splice(index,1)
// }

// console.log(array);


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }

//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list = new linkedList()

// console.log(list.isEmpty());
// console.log(list.getSize());
// list.print()

// list.prepend(30)
// list.print()
// list.prepend(40)
// list.prepend(50)
// list.print()




//----------------------------------PREPEND/APPEND/INSERT/REMOVE-----------------------------------------



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new linkedList()

list.prepend(10)
list.prepend(20)

list.append(20)
list.print()

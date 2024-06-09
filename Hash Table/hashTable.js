class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key)
        
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key,value]]
        } else {
            const sameKeyItem = bucket .find(item => item[0] === key)
            if(sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }
    get(key) {
        const index = this.hash(key)
        const bucket  = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if(bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }   
}
const table = new hashTable(50)

// table.set("mane", "Rithas")
table.set("name","Hari")
// table.set("age",21)
// table.remove("name")
table.display()
// console.log(table.get("name"));
// console.log(table.get("mane"));









// function highestFrequent(arr){
//     let hash = {};
//     let maxFrequency = 0;
//     // let maxElement = null;

//     for(let i=0 ; i<arr.length ; i++){
//         const element = arr[i];
//         if(hash[element]){
//             hash[element]++
//         }else{
//             hash[element]=1
//         }

//         if(hash[element] > maxFrequency){
//             maxFrequency = hash[element];
//             // maxElement = element;
//         }
//     }

//     return maxFrequency;
// }
// let arr = [1,1,1,1,2,3,3,2,2,1]
// let frequent = highestFrequent(arr);
// console.log(frequent);






// function findDuplicates(array){
//     let hashMap = {};
//     let duplicates = [];

//     array.forEach(element => {
//         if(hashMap[element]){    
//             if(!duplicates.includes(element)){
//                 duplicates.push(element)
//             }

//         }else{
//             hashMap[element] = true;
//         }
//     });

//     return duplicates;
// }

// const array = [1, 2, 3, 4, 5, 2, 6, 7, 3, 4, 9, 1];
// const duplicates = findDuplicates(array);
// console.log("Duplicates:", duplicates);
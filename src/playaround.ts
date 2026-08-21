
// 1. menu 1 cấp: nhập bài -> switch(choice) -> case 1,2,3... xử lí bài
// 2. menu nhiều cấp:


/*
const prompt = require("prompt-sync")();

console.log("===== MENU =====");
console.log("1. HashTable");
console.log("2. Two Pointer");
console.log("3. Thoat");


let node = Number(prompt("Nhap node: "));
switch(node) {
    case 1: 
        // Menu chính > hashTable
        console.log("\n===== HASHTABLE =====");
        console.log("1. Two Sum");
        console.log("2. Valid Anagram");
        console.log("3. Contains Duplicate");

        let choiceHashTable = Number(prompt("Nhap choice: "));
        switch(choiceHashTable) {
            case 1:
                // Menu chính > hashTable > twoSum
                // two sum
                break;
            case 2:
                // valid anagram
                break;
            case 3:
                // contains duplicates
                break;
        }
        break;

    case 2: 
        // Menu chính > TwoPointer
        console.log("\n===== TWO POINTER =====");
        console.log("1. Reverse Array");
        console.log("2. Merge Sorted Array");
        console.log("3. Move Zeroes");

        let choiceTwoPointer = Number(prompt("Nhap choice: "));
        switch(choiceTwoPointer) {
            case 1:
                // Menu chính > twoPointer > reverse
                // reverse
                break;
            case 2:
                // merge
                break
            case 3: 
                // contains duplicates
                break;
        }
        break;

    case 3: 
        console.log("thoat");
        break;

    default: 
        console.log("node ko ton tai");
}
*/

// [ { tenBai , CacBai [ ten:... ] }, { tenBai , CacBai [ten:....] } ].
//                  0                               1
const danhSachNode = 
[
    {
        tenBai: 'Hash Table',
        cacBai: 
        [
            {ten: 'ContainDuplicates'},
            {ten: 'Two Sum'},
            {ten: 'GroupAnagram'}
        ]
    },

    {
        tenBai: 'Two Pointer',
        cacBai:
        [
            {ten: 'reverse array'},
            {ten: '3 sum'},
            {ten: 'remove zereos'},
        ]
    }
];

// in menu
function taoMenu():string {
    let text = "MENU\n";
    for (let i = 0; i<danhSachNode.length; i++) {
        text = text + (i+1) + '.' + danhSachNode[i].tenBai +  "\n";
    }
    text = text + "Nhap so de chon: ";
    return text;
}

console.log(taoMenu());

// tạo menu bài
function taoMenuBai(node:number): string {
    
}
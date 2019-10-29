//===============Lab 7 ================

let input = [3, 5, 4, 2, 1, 5, 5]
let total = 0;
let max = 0;
let position = 0;

input.forEach((x, index)=>{
    total = total + x
    if(x > max){
        max = x;
        position = index;
    }
})


console.log(total)
console.log(max)
console.log(position)





array = [1, 2, 3, 4]

array.forEach()


//===============Lab 8 ================

let input = [2, 3, 8, 9];
let target = 10;
let firstNum = 0;
let pairArray = [];

if(input.length < 2){
    console.log('false')
} else {

    while(input.length !== 0){

        firstNum = input.shift();
        input.forEach((x)=>{
            if(x + firstNum === target){                
                pairArray.push(firstNum);
                pairArray.push(x);
            }
        })

    }

}

console.log(pairArray)
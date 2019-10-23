/*===========sol1==============*/
const hw1 = () => {

    let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
    let result1 = [];

    arr1.map(x => {
    
        if(x%2 === 1){
            result1.push(x);
        }
    })

    console.log(`sol 1 is .... ${result1}`);
}

hw1();


/*===========sol2==============*/
const hw2 = () => {
    
    let arr2 = [0,9,1,8,2,7,3,6,4,5];
    let result2 = arr2.sort();

    console.log(`sol 2 is .... ${result2}`)
}

hw2();


/*===========sol3==============*/
const hw3 = () => {

    let arr3 = [0,1,2,3,4,5,6,7,8,9,10];
    let result3 = []

    arr3.forEach(x => {
        if(x === 0 ){
            result3 = result3;
        }
        else if(x%2 === 0){
            result3.push(x);
        }
    })

    console.log(`sol 3 is .... ${result3}`);
}

hw3();

/*===========sol4==============*/

const hw4 = () => {

    let myMap = new Map();

    myMap.set('bom1', 10);
    myMap.set('bom2', 20);

    console.log(myMap)
    console.log(`sol 4 map value from key 1 is .... ${myMap.get('bom1')}`) 
    console.log(`sol 4 has from key 1 is .... ${myMap.has('bom1')}`) 

}

hw4();

/*===========sol5==============*/

const hw5 = () => {

    let arr5 = [0,3,1,2];
    let result5 = [];
    

    while(arr5.length !== 0 ){

        let dataValue = arr5.shift();

            if(arr5.length === 0 ){
                result5.push(dataValue)
            } else {
                let minNum = [];
                arr5.forEach(x => {
                    if(dataValue <= x){
                        minNum.push('ture');
                    } else {
                        minNum.push('false');
                    }
                });
                if(minNum.includes("false")){
                    arr5.push(dataValue);
                } else {
                    result5.push(dataValue);
                }
            }

    }

    console.log(result5);

}

hw5();


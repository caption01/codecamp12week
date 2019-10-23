/*===========sol1==============*/
const hw1 = () => {

    let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
    let result1 = [];

    arr1.map(x => {
    
        if(x%2 === 1){
            result1.push(x);
        }
    })
    console.log(`==============================`);
    console.log(`Question 1 is .... ${arr1}`);
    console.log(`sol 1 is .... ${result1}`);
    console.log(`==============================`);
}

hw1();


/*===========sol2==============*/
const hw2 = () => {
    
    let arr2 = [0,9,1,8,2,7,3,6,4,5];
    let result2 = arr2.sort();

    console.log(`==============================`);
    console.log(`Question 2 is .... ${arr2}`);
    console.log(`sol 2 is .... ${result2}`)
    console.log(`==============================`);
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

    console.log(`==============================`);
    console.log(`Question 3 is .... ${arr3}`);
    console.log(`sol 3 is .... ${result3}`);
    console.log(`==============================`);
}

hw3();

/*===========sol4==============*/

const hw4 = () => {

    let myMap = new Map();

    myMap.set('bom1', 10);
    myMap.set('bom2', 20);

    console.log(`==============================`);
    console.log(`Question 4 is create map`);
    console.log(myMap)
    console.log(`sol 4 Is map has key1 .... ${myMap.has('bom1')}`) 
    console.log(`sol 4 map value from key 1(bom1) is .... ${myMap.get('bom1')}`) 
    console.log(`==============================`);

}

hw4();

/*===========sol5==============*/

const hw5 = () => {

    let arr5 = [0,3,1,2,0,0,2];
    let result5 = [];
    const copyArr = arr5.map(x=>x);
    

    while(arr5.length !== 0 ){

        let dataValue = arr5.shift();

            if(arr5.length === 0 ){
                result5.push(dataValue)
            } else {
                let trueNum = [];
                arr5.forEach(x => {
                    if(dataValue >= x){
                        trueNum.push('ture');
                    } else {
                        trueNum.push('false');
                    }
                });
                if(trueNum.includes("false")){
                    arr5.push(dataValue);
                } else {
                    result5.push(dataValue);
                }
            }

    }

    console.log(`==============================`);
    console.log(`Question 5 is .... ${copyArr}`);
    console.log(`sol 5 is .... ${result5}`);
    console.log(`==============================`);

}

hw5();


const hw2 = (arr) => {

    let input = arr;
    let max = 0;
    let min = 0;

    input.forEach(x=>{
        if(min === 0 && max === 0){
            max = x;
            min = x;
        }

        if(x>=max){
            max = x;
        }

        if(x<=min){
            min = x;
        }
    })
    
    console.log(max)
    console.log(min)

}

hw2([10,20,30,500]);
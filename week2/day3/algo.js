const GDC = () => {

    let minNum = 30;
    let maxNum = 60;
    let intNum = 2;
    let target = minNum;
    let result = [];

    while(intNum !== target ){
        if(minNum%intNum === 0 && maxNum%intNum === 0){
            result.push(intNum);
            minNum = minNum / intNum
            maxNum = maxNum / intNum
            intNum++;
        }else{
            intNum++;
        }
    }
   
    console.log(result)
}

GDC();
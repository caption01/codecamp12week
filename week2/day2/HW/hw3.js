const hw3 = () => {

    let inputDim = [2,2]
    let matt1 = [1,2,3,4]
    let matt2 = [10,20,30,40]
    let result = [];
    
    let round = inputDim.reduce(((x, y) => x*y))

    for(i=0; i<round; i++){
        result.push(matt1[i]+matt2[i]);
    }

    console.log(result)
    
}

hw3();
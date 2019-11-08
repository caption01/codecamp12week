const hw4 = () => {

    let input = "ABCSA"
    let array = input.split("", input.length)
    let result = [];

    array.forEach(value => {
        if(value.charCodeAt(0)<97){
            result.push("upper")
        } else if (value.charCodeAt(0)>=97){
            result.push("lower")
        } else {
            result.push("non")
        }
    })

    if(result.includes("upper")&&result.includes("lower")){
        console.log("Mix")
    }else if (!result.includes("upper")){
        console.log("LowerCase")
    }else {
        console.log("UpperCase")
    }

}

hw4();



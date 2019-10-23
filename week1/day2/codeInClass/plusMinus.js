const plus = () => {
    let getNumber = Number(document.querySelector("#display").textContent) 
    let output = getNumber + 1;
    return document.querySelector("#display").innerHTML = output
}

const minus = () => {
    let getNumber = Number(document.querySelector("#display").textContent) 
    let output = getNumber - 1;
    return document.querySelector("#display").innerHTML = output
}
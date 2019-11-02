const hw1 = (x,y,z) => {

    let input1 = x;
    let input2 = y;
    let input3 = z;

    let score = input1+input2+input3;

    switch(true) {
        case score>=80:
          console.log("A")
          break;
        case score>=75:
          console.log("B+")
          break;
        case score>=70:
          console.log("B")
          break;
        case score>=65:
          console.log("C+")
          break;
        case score>=60:
          console.log("C")
          break;
        case score>=55:
          console.log("D+")
          break;
        default:
          console.log("D+")
      }
}

hw1(30,10,20);
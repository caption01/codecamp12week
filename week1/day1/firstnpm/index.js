const _ = require('lodash');

const object = {
    peopleA: {
        name: 'Mr.A',
        email: 'A@gmail.com'
    },
    peopleB: {
        name: 'Mr.B',
        email: 'B@gmail.com'
    },
    peopleC: {
        name: 'Mr.C',
        email: 'C@gmail.com'
    }
}

console.log(`this is object ${object.peopleA.name}`)

console.log(_.get(object, ['peopleA', 'name']))


/*====================*/

const loginStatus = (status) => {

    let result = '';

    (status === 'Employee') ? result = 'Hello'
    : (status === 'Director') ? result = 'Greeting'
    : (status === '') ? result = 'No login'
    : result = 'error'

    return result;
}

/*================================*/

const sum = (a, b) => {
    return a = b;
}


/*===========================================*/





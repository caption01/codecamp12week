const fetch = require('node-fetch')

const reqLab1 = () => {
    fetch('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(res => console.log(res.data))
        .catch(err => console.log("reqLab1 error"))
} 

const reqLab2 = () => { 

    const data = {
        name: "morpheus",
        job: "leader"
    }

    fetch('https://reqres.in/api/users', {
        method: 'post',
        body: JSON.stringify(data),
        header: {
            'Content-Type': 'application/json'
        }
    })  .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log("reqLab2 error"))

}


reqLab2();



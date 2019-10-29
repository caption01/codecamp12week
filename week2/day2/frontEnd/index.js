$(document).ready(function(){

    fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => {console.log("connectiong error")})

    $("#inputbtn").click(()=>{

        let key = $("#inputkey").val();
        let text = $("#inputtext").val();

        let data = {
            key: key,
            text: text
        }

        fetch('http://localhost:3000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) 
        })      
            .then(res => res.json())
            .then(res => {
                createTable(res);
            })
            .catch(err => {console.log("POST Request Error")})
    })


    const createTable = (data) => {
            $("#table").append(
                `<tr>
                    <td>${data.key}</td>
                    <td>${data.text}</td>
                </tr>`
            );

    }    

  });


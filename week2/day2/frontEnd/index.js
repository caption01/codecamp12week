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
                console.log("Success add data to DataBase")
                createTable(res);
            })
            .catch(err => {console.log("POST Request Error")})
    })

    $("#inputdonebtn").click(()=>{
        let key = $("#inputdone").val();
        let id = `content-${key}`
        let data = {
            key : key
        }
        
        fetch('http://localhost:3000/', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) 
        })      
            .then(res => res.json())
            .then(res => {
                console.log(res)
                $(`#${id}`).remove();
            })
            .catch(err => {console.log("DELETE Request Error")})

    })


    const createTable = (data) => {
            $("#table").append(
                `<tr id=content-${data.key}>
                    <td class"datakey" >${data.key}</td>
                    <td>${data.text}</td>
                </tr>`
            );

    }    

  });


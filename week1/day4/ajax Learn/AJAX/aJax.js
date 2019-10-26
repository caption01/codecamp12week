$.ajax({"url": "https://reqres.in/api/users", "method":"GET"})
    .done(dataAPI => {
        
        console.log(dataAPI.data)

        dataAPI.data.map( (x) => {
            
            let item = {
                id: x.id,
                email: x.email,
                firstname: x.first_name,
                lastname: x.last_name,
                Avartar: x.avatar
            }

            $("#table").append(
                `<tr>
                    <td>${item.id}</td>
                    <td>${item.email}</td>
                    <td>${item.firstname}</td>
                     <td>${item.lastname}</td>
                     <td><img src=${item.Avartar}></td>
                </tr>`
            );
        })
    })



$("#todo-ul").on('click', (".none.check"), ()=>{
    alert('check')
    let item = this.parent().text();
    alert(item)
})

$("#complete-ul").on('click', ('.none.repeat'), ()=>{
    alert("repeat")
})

$("#complete-ul").on('click', ('.none.trash'), ()=>{
    alert("trash")
})


$("#btn-add").click(()=>{
    let item = {
        value : $("#text-add").val(),
        status: "todo"
    }

    fetch('http://localhost:3000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(item) 
        })      
        .then(res => res.json())
        .then(res => createItem(res))
        .catch(err => console.log('adding item error'))
    $("#text-add").val(" ")
})



const createItem = (item) => {
    if(item.status === "todo"){
        $("#todo-ul").append(`
        <li>${item.value} 
        <span class="none trash"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></span>
        <span class="none check"><i class="fa fa-check fa-lg icon" aria-hidden="true"></i></span>
        </li>`
        )
    }else if(item.status === "complete"){
        $("#complete-ul").append(`
        <li>${item.value} 
        <span class="none trash"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></span>
        <span class="none repeat"><i class="fa fa-repeat fa-lg icon" aria-hidden="true"></i></span>
        </li>`
        )
    } else {
        alert("data is not complete")
    }

    
}
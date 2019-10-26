$("#signin-btn").click(()=>{

	let signInId = $("#signin-id").val();
	let signInPass = $("#signin-pass").val();

	$.ajax({
		url: "https://reqres.in/api/login",
		method: 'POST',
		data : {
			email: signInId,
			password: signInPass
		},
		success : function(result) {
			console.log(result)
		},
		error : function(err){
			console.log("error")
		}
	});

	

})


$(document).ready(function(){

  fetch('http://localhost:3100/post', {
            method: "GET",
		        mode: 'cors'
           })      
            .then(res => res.json())
            .then(res => {
              res.forEach(post => {
                createPost('Nutchapon', post.date, post.text)
              })
            })
            .catch(err => {console.log("GET REQUEST FROM USER PAGE")})
  



    $("#post-create").click(()=>{

        let username = "nutchapon"
        let timepost = new Date()
        let imageUrl = "https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg"
        let imageText = "this is text to explain to image"
        let text = $("#post-text-input").val();

        let data = {
          date: timepost,
          text: text
        }

        fetch('http://localhost:3100/post', {
            method: "POST",
		        mode: 'cors', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
           })      
            .then(res => res.json())
            .then(res => {
                if(res === "success"){
                  createPost(username, timepost, text)
                }else{
                  console.log('error to create post')
                }
            })
            .catch(err => {console.log("POST Request Error")})
        })

        
    

})

  const createPost = (username, timepost, text) => {

    $(".post-timeline").append(
      `<div class="card mt-4">
              <div class="card-header d-flex align-items-center">
                <img src="https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg" width="30" height="30" class="d-inline-block align-top mr-2" alt="" id="account-profile">
                <div>
                  <div>${username}</div>
                  <div>${timepost}</div>
                </div>
  
              </div>
              <div class="card-body body-block">
                <p class="card-text">${text}</p>
              </div>

              <div class="card-footer text-muted d-flex justify-content-around">
                <div>
                    <button type="button" class="btn btn-light btn-sm" data-dismiss="modal">
                        <i class="fa fa-thumbs-o-up mr-2" style="font-size:18px"></i>
                        <span>like</span>
                    </button>
                </div>
                <div>
                    <button type="button" class="btn btn-light btn-sm" data-dismiss="modal">
                        <i class="fa fa-commenting-o mr-2" style="font-size:18px"></i>
                        <span>comment</span>
                    </button>
                </div>
                <div>
                    <button type="button" class="btn btn-light btn-sm" data-dismiss="modal">
                        <i class="fa fa-share mr-2" style="font-size:18px"></i>
                        <span>share</span>
                    </button>
                </div>
              </div>
          </div>`
  )

  $("#post-text-input").val("");
  $("#post-text-input").attr("placeholder", "คุณกำลังคิดอะไรอยู่");

  }
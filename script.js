let subInput = document.getElementById("sub-for-news")
let subButton = document.getElementById("subButton")
let mailErrorMsg = document.getElementById("errorMail")

let subscribed = 0

subButton.addEventListener("click", function(){
   if(Boolean(subInput.value) === false){
      console.log("Please enter an valid email")
      mailErrorMsg.textContent = "Please enter an valid email"
      subscribed = 1
      mailErrorMsg.innerHTML = `
      <p style="color:rgb(177, 17, 17); font-size:1rem"> 
      Please enter an valid email
      </p>
      
      `
   }else if(subscribed === 1){
      console.log("Subscription succesfull!")
      mailErrorMsg.textContent = "Registration Succesfull !"
      mailErrorMsg.innerHTML = `
      <p style="color:green; font-size:1rem"> 
      Subscription for Newsletter Succesfull!
      </p>
      `
   }else[
      mailErrorMsg.innerHTML = `
      <p style="color:rgb(177, 17, 17); font-size:1rem"> 
      Please enter an valid email
      </p>
      `
   ]
})

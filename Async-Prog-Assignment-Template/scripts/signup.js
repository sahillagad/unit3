document.querySelector("form").addEventListener("submit",myfunction)





// var arr=JSON.parse(localStorage.getItem("data"))||[]
function myfunction(){
event.preventDefault()
var object={
name:document.querySelector("#name").value,
contact:document.querySelector("#contact").value,
email:document.querySelector("#email").value,
passward:document.querySelector("#password").value


}



localStorage.setItem("data",JSON.stringify(object))
alert("sign up sucessful")




window.location.href="login.html"
}



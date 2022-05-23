var data=JSON.parse(localStorage.getItem("data"))

document.querySelector("form").addEventListener("submit",myfunction)


function myfunction(){
event.preventDefault()
// console.log("hii")

var object={

    email:document.querySelector("#useremail").value,
    password:document.querySelector("#userpassward").value
}



if(object.email==data.email && object.password == data.passward ){
alert("login successful")
window.location.href="index.html"
}



else  if(object.email==data.email && object.password != data.passward ){
       
    alert("invalid passward")
    
}


else if(object.email!=data.email){

     
    alert("invalid email id")

}



else if(object.email!=data.email && object.password != data.passward ){


alert("invalid email id and passward")

}






}
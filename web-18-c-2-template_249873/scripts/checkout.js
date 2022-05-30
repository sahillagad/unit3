

document.querySelector("form").addEventListener("submit",confirmfun)


function confirmfun(){
event.preventDefault()
// console.log("hii")

// A1
alert("Your order is accepted")


// A2
function alertfun2(){

alert("Your order is being Prepared")

}

setTimeout(alertfun2,3000)


// A3
function alertfun3(){

alert("Your order is being packed")

}

setTimeout(alertfun3,8000)







// A4
function alertfun4(){

alert("Your order is out for delivery")
}

setTimeout(alertfun4,10000)




// A5
function alertfun5(){

alert("Order delivered")
}

setTimeout(alertfun5,1200)









}




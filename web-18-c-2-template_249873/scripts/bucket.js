// On clicking remove button the item should be removed from DOM as well as localstorage.


var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
console.log(coffee)

display(coffee)



function display(coffee){
  var sum=0

coffee.forEach(function(ele,ind){

  
// 
var divtag=document.createElement("div")
document.querySelector("#bucket").append(divtag)

var image=document.createElement("img")
image.setAttribute("src",ele.image)
divtag.append(image)

var h2tag=document.createElement("h2")
h2tag.innerText="Name :"+" "+ele.title
divtag.append(h2tag)


var h5tag=document.createElement("h5")
h5tag.innerText="Ingredients:"+" "+ele.ingredients
divtag.append(h5tag)



var h3tag=document.createElement("h3")
h3tag.innerText="Price:"+" "+ele.price
divtag.append(h3tag)
sum=sum+Number(ele.price)


// delete

var button= document.createElement("button")
button.innerText="Remove"
button.setAttribute("id","remove_coffee")
button.addEventListener("click",function(){

  removecoffee(ele,ind)

})
divtag.append(button)



  
});
// console.log(sum)
document.querySelector("#total_amount").innerText=sum
}


function  removecoffee(ele,ind){
// console.log(ele)
coffee.splice(ind,1)
localStorage.setItem("coffee",JSON.stringify(coffee))

window.location.reload()


} 


document.querySelector("#confirm_checkout").addEventListener("click",checkout)

function checkout(){

window.location.href="./checkout.html"


}




var slideshow=document.querySelector("#slideshow")



var moviearr=[]


function Movies(poster,name,language,date,rating){
this.poster=poster
this.name=name
this.language=language
this.release_data=date
this.IMDb=rating


}

var movie1= new Movies("https://assetscdn1.paytm.com/images/cinema/Bb2-705x750-36a68220-d65c-11ec-8386-030f3d92e055.jpg","Bhool Bhulaiyaa 2","Hindi","21 May 22",8)
var movie2= new Movies("https://assetscdn1.paytm.com/images/cinema/Anek-705x750-cec02f00-d8e3-11ec-a247-cb3046901f82.jpg","Anek","Hindi","27 May 22",7)
var movie3=new Movies("https://assetscdn1.paytm.com/images/cinema/Dhaakad-705x750-e84ea150-d37e-11ec-8679-ab26124c1c6e.png","Dhaakad","Hindi","21 May 22",8)
var movie4=new Movies("https://assetscdn1.paytm.com/images/cinema/Jurassic-World--Dominion-705x750-fb02f490-cd52-11ec-8d22-2363945d80ef.jpg","Jurassic World: Dominion","Hindi","10 Jun 22",6)
var movie5=new Movies("https://assetscdn1.paytm.com/images/cinema/Jayeshbhai-Jordaar---705x750-660c01c0-cf7c-11ec-98b3-41c37f260d1c.jpg","Jayeshbhai Jordaar","Hindi","21 May 22",5)
var movie6=new Movies("https://assetscdn1.paytm.com/images/cinema/KGF-705x750-76008750-b6fd-11ec-9639-8322852eadd4.jpg","K.G.F. Chapter 2","Hindi","21 May 22" ,10)
var movie7=new Movies("https://assetscdn1.paytm.com/images/cinema/Runway-705x750-9f569ae0-c22e-11ec-b8f2-c1f4a80a2b4c.jpg","Runway 34","Hindi","21 may 22",5)
var movie8=new Movies("https://assetscdn1.paytm.com/images/cinema/Doctor-Strange--In-The-Multiverse-Of-Madness-r-705x750-4a867c30-b75a-11ec-9639-8322852eadd4.jpg","Doctor Strange","Hindi","21 may 22",4)
var movie9=new Movies("https://assetscdn1.paytm.com/images/cinema/Top-Gun--Maverick-705x750-3fc02540-cc80-11ec-829c-4bf6477dd3c8.jpg","Top Gun: Maverick","Hindi","21 May 22",9)



moviearr.push(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9)

var i=0
setInterval(function(){

if(i===8){
i=0


}

slideshow.innerHTML=null;
var image=moviearr[i].poster
var img=document.createElement("img")
img.src=image
slideshow.append(img)
i++;


},1000);




document.querySelector("#dsc").addEventListener("click",dscfun)

function dscfun(){

moviearr.sort(function(a,b){

return a.IMDb-b.IMDb


})
// console.log(moviearr)
displaydata(moviearr)

}


document.querySelector("#asc").addEventListener("click",ascfun)

function ascfun(){

moviearr.sort(function(a,b){

return b.IMDb-a.IMDb


})
// console.log(moviearr)
displaydata(moviearr)

}


















var moviesdata=document.getElementById("movies")



displaydata(moviearr)


function displaydata(moviearr){
document.querySelector("#movies").innerHTML=""
moviearr.forEach(function(ele){
    

var divtag=document.createElement("div")
moviesdata.append(divtag)


var imgtag=document.createElement("img")
imgtag.setAttribute("src",ele.poster)
divtag.append(imgtag)


var divtag1=document.createElement("div")
divtag.append(divtag1)

var ptag=document.createElement("p")
ptag.innerText=ele.name
divtag1.append(ptag)



var ptag1=document.createElement("p")
ptag1.innerText=ele.language
divtag1.append(ptag1)


var ptag2=document.createElement("p")
ptag2.innerText=ele.release_data
divtag1.append(ptag2)


var ptag3=document.createElement("p")
ptag3.innerText= "IMDb :"+" "+ele.IMDb
divtag1.append(ptag3)




});




}
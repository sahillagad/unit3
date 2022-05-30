// Add the coffee to local storage with key "coffee"

async function result(){
    try{
      var url="https://masai-mock-api.herokuapp.com/coffee/menu"
    
      var res=await fetch(url)
      var data=await res.json()
    
      appened(data.menu.data)
    
    
    }
    
    catch(err){
    console.log(err)
    }
    }
    
    result()
    
    // type of coffee, image, price and add to bucket button.
    // Each item should show type of coffee, image, price and add to bucket button.
    // Users should be able to add the items to the bucket when clicked on add to bucket button.
    // Show a bucket count in div to show how many items in the bucket, on top RHS.
    // Items added to the bucket will be stored in LocalStorage so that you can retrieve them and show them on bucket.html page.
    
    
    
    function appened(data){
    console.log(data)
    
    
    data.forEach(function(ele){
    
    var divtag=document.createElement("div")
    document.querySelector("#menu").append(divtag)
    
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
    
    
    
    var button= document.createElement("button")
    button.innerText="Add To Bucket"
    button.setAttribute("id","add_to_bucket")
    button.addEventListener("click",function(){
    
      addtobucket(ele)
    
    })
    divtag.append(button)
    
      
    });
    
    
    
    
    
    
    }
    
    
    
    var  coffee=JSON.parse(localStorage.getItem("coffee"))||[]
    function   addtobucket(ele){
    
    
      coffee.push(ele)
      localStorage.setItem("coffee",JSON.stringify(coffee))
      console.log(ele)
    
    
      document.querySelector("#coffee_count").innerText=coffee.length
    }
    
    
    
    document.querySelector("#coffee_count").innerText=coffee.length
    
    
    
    
    
    
    
    
    
    
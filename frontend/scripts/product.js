function displaydata() {
    fetch("http://localhost:8800/product/show")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          display(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }
  let array = JSON.parse(localStorage.getItem("cart-product")) || [];
  let container=document.getElementById("alldata")
  displaydata()
  let token = localStorage.getItem("token");
  function display(data) {
    container.innerHTML=null
    data.forEach((element,index) => {
        let card=document.createElement("div")
        card.classList.add("card")
        let img = document.createElement("img");
        img.setAttribute("src", element.image);

        let nameinp=document.createElement("p")
        nameinp.innerText=element.name

        let price=document.createElement("p")
        price.innerText=element.price
        let card2=document.createElement("div")
       
        
let button2=document.createElement("button")
button2.innerText="Add To Cart"
button2.addEventListener("click",()=>{
    if(token){
      
        // array.push(element)
        // localStorage.setItem("cart-product",JSON.stringify(array))
        // alert("product added")
        let filtered=array.filter((ele,i)=>{
          if(element._id==ele._id){
            return true
          }else{
            return false
          }
        })
if(filtered.length>0){
  alert("product already in cart")
}else{
  array.push(element)
         localStorage.setItem("cart-product",JSON.stringify(array))
        alert("product added")
}
       
      }
    else{
        alert("Please login first")
        window.location.href="../html/login.html"
    }
})
        let button=document.createElement("button")
        button.innerText="VIEW DETAILS"
        button.addEventListener("click",()=>{
          localStorage.setItem("single-product",JSON.stringify(element))
          window.location.href="../html/individual.html"
        })
        card2.append(button,button2)
        card.append(img,nameinp,price,card2)
        
        container.append(card)
        
    });
  
  }
  let username= localStorage.getItem("name");
  
  let user = document.getElementById("profile");
  if (username) {
    user.innerText = username;
  }

  let button = document.getElementById("List");
  button.addEventListener("click", () => {
    // localStorage.removeItem(name);
    // localStorage.removeItem(token);
    console.log(name, token);
    console.log("trupti");
    localStorage.clear();
    user.innerText = "Profile";
  });
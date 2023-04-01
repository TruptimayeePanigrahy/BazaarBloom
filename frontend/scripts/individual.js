<<<<<<< Updated upstream
let name = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  let user = document.getElementById("profile");
  if (name) {
    user.innerText = name;
  }

=======
let username = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  let user = document.getElementById("profile");
  if (username) {
    user.innerText = username;
  }
  let array = JSON.parse(localStorage.getItem("cart-product")) || [];
>>>>>>> Stashed changes
  let button = document.getElementById("List");
  button.addEventListener("click", () => {
    // localStorage.removeItem(name);
    // localStorage.removeItem(token);
<<<<<<< Updated upstream
    console.log(name, token);
=======
    console.log(username, token);
>>>>>>> Stashed changes
    console.log("trupti");
    localStorage.clear();
    user.innerText = "Profile";
  });

let data=JSON.parse(localStorage.getItem("single-product"))
<<<<<<< Updated upstream
let head=document.getElementById("heading")
head.innerText=data.name


=======
let indimage=document.getElementById("indimage")
let rightbox=document.getElementById("rightbox")
let img=document.createElement("img")
img.src=data.image
img.style.height="400px"
img.style.height="400px"
let container=document.querySelector("#div")
let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let div3=document.getElementById("div3")
let div4=document.getElementById("div4")
let div5=document.getElementById("div5")




let p=document.createElement("h5")
p.innerText=data.Ad_id
p.style.fontWeight="bold"

let p1=document.createElement("h5")
p1.innerText=data.condition
p1.style.fontWeight="bold"
let p2=document.createElement("h5")
p2.innerText=data.Sellertype
p2.style.fontWeight="bold"
let p3=document.createElement("h5")
p3.innerText=data.brand
p3.style.fontWeight="bold"
let p4=document.createElement("h5")
p4.innerText=data.producttype
p4.style.fontWeight="bold"
let p5=document.createElement("h6")
p5.innerText=data.description
// p5.style.color="grey"


container.append(p)
div1.append(p1)
div2.append(p2)
div3.append(p3)
div4.append(p4)
div5.append(p5)
indimage.append(img,container,div1,div2,div3,div4,div5)



 let about=document.createElement("p")
 about.innerText=data.name
 about.style.fontWeight="bold"
 let price=document.createElement("p")
 price.innerText=`₹${data.price}`
 price.style.color="blue"
 price.style.fontWeight="bold"
let button1=document.createElement("button")
button1.innerText="CALL"
button1.classList.add("call")
let button2=document.createElement("button")
button2.innerText="CHAT"
button2.classList.add("call")
// button1.style.color="white"
// button1.style.background-color="blue"
rightbox.append(about,price,button1,button2)



totaldata()
function totaldata(){
    let totalproduct=document.getElementById("total")
    // totalproduct.innerText=array.length
    if(array.length>0){
        totalproduct.innerText=array.length
    }
  }
>>>>>>> Stashed changes

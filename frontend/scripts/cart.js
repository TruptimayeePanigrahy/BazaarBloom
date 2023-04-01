let username = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  let user = document.getElementById("profile");
  if (username) {
    user.innerText = username;
  }

  let button = document.getElementById("List");
  button.addEventListener("click", () => {
    // localStorage.removeItem(name);
    // localStorage.removeItem(token);
    console.log(username, token);
    console.log("trupti");
    localStorage.clear();
    user.innerText = "Profile";
  });
  let array = JSON.parse(localStorage.getItem("cart-product")) || [];
let container=document.getElementById("showdata")
displaydata(array)
  function displaydata(data){
container.innerHTML=null
data.forEach((element,index) => {
    let card=document.createElement("div")
    let leftbox=document.createElement("div")
    let rightbox=document.createElement("div")
        card.classList.add("box")
        let img = document.createElement("img");
        img.setAttribute("src", element.image);

        let nameinp=document.createElement("p")
        nameinp.innerText=element.name

        let price=document.createElement("p")
        price.innerText=element.price
        let button=document.createElement("button")
        button.innerText="VIEW DETAILS"
        let button2=document.createElement("button")
        button2.innerText="DELETE";
        button2.addEventListener("click",()=>{
            array = array.filter((ele, i) => {
                if (element._id == ele._id) {
                  return false;
                } else {
                  return true;
                }
              });
              localStorage.setItem("cart-product", JSON.stringify(array));
              displaydata(array)
              totaldata(array)
        })
        leftbox.append(img)
        rightbox.append(nameinp,price,button,button2)
        card.append(leftbox,rightbox)
        container.append(card)
});
  }
  totaldata()
  function totaldata(){
    let totalproduct=document.getElementById("total")
    // totalproduct.innerText=array.length
    if(array.length>0){
        totalproduct.innerText=array.length
    }
  }
let name = localStorage.getItem("name");
  let token = localStorage.getItem("token");
  let user = document.getElementById("profile");
  if (name) {
    user.innerText = name;
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

let data=JSON.parse(localStorage.getItem("single-product"))
let head=document.getElementById("heading")
head.innerText=data.name



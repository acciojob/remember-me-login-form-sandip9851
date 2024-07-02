window.onload = function() {
  const button = document.querySelector("#submit");
  const pwd = document.querySelector("#password");
  const name = document.querySelector("#username");
  const checkBox = document.querySelector("#checkbox");

  class details {
    constructor(name,password){
      this.name = name
      this.password = password
    }
  }

  button.addEventListener("click",saveData)

  function saveData(eve) {
    eve.preventDefault()

    if(checkBox.checked){
      let provideDetails = new details(name.value,pwd.value)

      let getDetails = localStorage.getItem("details");
      let rawData = JSON.parse(getDetails);

      if (rawData && name.value === rawData.name) {
        alert(`You are an existing user`);
        return;
      }

      let jsonDetails = JSON.stringify(provideDetails)
      localStorage.setItem("details",jsonDetails)

      alert(`Logged in as ${name.value}`)
    } else {
      localStorage.removeItem("details");
    }
  }

  let getDetails = localStorage.getItem("details");
  let rawData = JSON.parse(getDetails);

  if(rawData) {
    let newButton = document.createElement("button");
    newButton.innerText = "Login as existing user"
    newButton.id = "existing"
    document.body.append(newButton)

    newButton.addEventListener("click",(eve)=>{
      eve.preventDefault();
      alert(`Logged in as ${rawData.name}`)
    })
  }
}
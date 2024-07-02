const button = document.querySelector("#submit");
const pwd = document.querySelector("#password");
const name = document.querySelector("#username");
const checkBox = document.querySelector("#checkbox");

const newButton = document.querySelector("#existing");
newButton.style.display = "none"

class details {
	constructor(name,pasword){
		this.name = name
		this.pasword = pasword
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
          newButton.style.display = "block"
			
					 
			newButton.addEventListener("click",(eve)=>{
				eve.preventDefault();
		alert(`Logged in as ${rawData.name}`)
			})

						return;
        }
		
		let jsonDetails = JSON.stringify(provideDetails)
		localStorage.setItem("details",jsonDetails)
		
		alert(`Logged in as ${name.value}`)
		

	}else{
		localStorage.removeItem("details");
	}
	

	
	
}


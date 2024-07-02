const usernameInput=document.getElementById('username');
const passwordInput=document.getElementById('password');
const checkboxInput=document.getElementById('checkbox');
const submitButton=document.getElementById('submit');
const existingButton=document.getElementById('existing');
 
function checkIfUserExistsInLocalStorage() {
	if(localStorage.getItem('user')){
		existingButton.style.display='block'
	}else{
		existingButton.style.display='none'
	}
}
 
checkIfUserExistsInLocalStorage()
 
function saveUserInLocalStorage() {
	const user={
		username:usernameInput.value,
		password:passwordInput.value,
	}
 
	localStorage.setItem('user',JSON.stringify(user))
}
 
function removeUserFromLocalStorage() {
	localStorage.removeItem('user')
}
 
existingButton.addEventListener('click',(e)=>{
	e.preventDefault();
	alert('Logged in as username')
})
 
submitButton.addEventListener('click',(e)=>{
	e.preventDefault();
 
	if(!checkboxInput.checked){
		removeUserFromLocalStorage()
		// remove existing button
		checkIfUserExistsInLocalStorage()
 
	}else{
		saveUserInLocalStorage()
		// show existing button
		checkIfUserExistsInLocalStorage()
	}
	alert('Logged in as username')
})

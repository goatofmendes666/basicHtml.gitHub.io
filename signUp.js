function submitForm()
{
	localStorage.setItem('email', document.getElementById("email").value);
	console.log(localStorage.getItem('email'));
	localStorage.setItem('password', document.getElementById("password").value);
	console.log(localStorage.getItem('password'));
	localStorage.setItem('name', document.getElementById("name").value);
	console.log(localStorage.getItem('name'));
	localStorage.setItem('sex', document.querySelector('input[name=sex]').value);
	console.log(localStorage.getItem('sex'));
	localStorage.setItem('dob', document.getElementById("dob").value);
	console.log(localStorage.getItem('dob'));
	localStorage.setItem('address', document.getElementById("address").value);
	console.log(localStorage.getItem('address'));
	localStorage.setItem('phone', document.getElementById("phone").value);
	console.log(localStorage.getItem('phone'));
	alert('Your account is created successfully!!! You will be redirected to home page for login!!!');
}

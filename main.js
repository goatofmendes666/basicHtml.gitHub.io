
var linkArray = window.location.href.split('/');
var pageName = linkArray[linkArray.length - 1];

if(pageName == "index.html")
{
	var slideIndex = 0;
	showSlides(slideIndex);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

if(localStorage.getItem("loggedIn") == "yes")
{
	display(localStorage.getItem("email"));
}

function signIn() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;


	var u = ["sandeep@gmail.com","user1@gmail.com", "user2@gmail.com"];
	var p = ["sodhi", "sodhi", "sodhi"];
	var f = ["sodhi" ,"sodhi","sodhi"]
	var lu = localStorage.getItem("email");
	var lp = localStorage.getItem("password");

	if(username == lu && password == lp)
	{
		localStorage.setItem("loggedIn","yes");

		display();
	}
	else if(u.includes(username)){
		if(password == p[u.indexOf(username)]){
			localStorage.setItem("loggedIn","yes");
			localStorage.setItem("email",username);
			localStorage.setItem("name",f[u.indexOf(username)]);
			display();
		}
	}
	else{
		alert("Wrong Username or Password!!!")
	}
}

function signOut(){
	if(pageName == "places.html"){
		window.location = "index.html";
	}
	document.getElementById("uname").innerText =  "";
	document.getElementById("liuname").style.display = "none";
	document.getElementById("lisignout").style.display = "none";

	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
	document.getElementById("signIn").style.visibility = "visible";
	document.getElementById("lisignup").style.visibility = "visible";
	document.getElementById("username").style.visibility = "visible";
	document.getElementById("password").style.visibility = "visible";
	localStorage.removeItem("email");
	localStorage.removeItem("loggedIn");
	alert('You are successfully signed out!!!');
}

function display(){
	document.getElementById("uname").innerText =  localStorage.getItem('name');
	
	document.getElementById("liuname").style.display = "block";
	document.getElementById("lisignout").style.display = "block";

	document.getElementById("username").style.visibility = "hidden";
	document.getElementById("password").style.visibility = "hidden";
	document.getElementById("signIn").style.visibility = "hidden";
	document.getElementById("lisignup").style.visibility = "hidden";
}

function attractions(){
	if(localStorage.getItem("loggedIn") == "yes"){
		window.location = "places.html";
	}else{
		alert("You are not allowed to visit this page, without logging in!!!");
	}
}

function postComment(){
	document.getElementById("commentName").innerText =  localStorage.getItem('name');
	document.getElementById("commentText").innerText =  document.getElementById("comment").value;
	document.getElementById("list2").style.visibility = "visible";
}

function postCommentSpa(){
	document.getElementById("commentNameSpa").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextSpa").innerText =  document.getElementById("commentSpa").value;
	document.getElementById("list2Spa").style.visibility = "visible";
}

function postCommenttransfer(){
	document.getElementById("commentNametransfer").innerText =  localStorage.getItem('name');
	document.getElementById("commentTexttransfer").innerText =  document.getElementById("commenttransfer").value;
	document.getElementById("list2transfer").style.visibility = "visible";
}

function postCommentrest(){
	document.getElementById("commentNamerest").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextrest").innerText =  document.getElementById("commentrest").value;
	document.getElementById("list2rest").style.visibility = "visible";
}

function postCommentwaterfall(){
	document.getElementById("commentNamewaterfall").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextwaterfall").innerText =  document.getElementById("commentwaterfall").value;
	document.getElementById("list2waterfall").style.visibility = "visible";
}

function postCommentisland(){
	document.getElementById("commentNameisland").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextisland").innerText =  document.getElementById("commentisland").value;
	document.getElementById("list2island").style.visibility = "visible";
}

function postCommentaquarium(){
	document.getElementById("commentNameaquarium").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextaquarium").innerText =  document.getElementById("commentaquarium").value;
	document.getElementById("list2aquarium").style.visibility = "visible";
}

function postCommentwonderland(){
	document.getElementById("commentNamewonderland").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextwonderland").innerText =  document.getElementById("commentwonderland").value;
	document.getElementById("list2wonderland").style.visibility = "visible";
}

function postCommenthigh(){
	document.getElementById("commentNamehigh").innerText =  localStorage.getItem('name');
	document.getElementById("commentTexthigh").innerText =  document.getElementById("commenthigh").value;
	document.getElementById("list2high").style.visibility = "visible";
}

function postCommentbeaches(){
	document.getElementById("commentNamebeaches").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextbeaches").innerText =  document.getElementById("commentbeaches").value;
	document.getElementById("list2beaches").style.visibility = "visible";
}

function postCommentsquare(){
	document.getElementById("commentNamesquare").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextsquare").innerText =  document.getElementById("commentsquare").value;
	document.getElementById("list2square").style.visibility = "visible";
}

function postCommentscarbrough(){
	document.getElementById("commentNamescarbrough").innerText =  localStorage.getItem('name');
	document.getElementById("commentTextscarbrough").innerText =  document.getElementById("commentscarbrough").value;
	document.getElementById("list2scarbrough").style.visibility = "visible";
}

hideAll();
document.getElementById("downtown").style.display = "block";

function hideAll(){
	document.getElementById("downtown").style.display = "none";
	document.getElementById("spa").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("transfer").style.display = "none";
	document.getElementById("waterfall").style.display = "none";
	document.getElementById("island").style.display = "none";
	document.getElementById("aquarium").style.display = "none";
	document.getElementById("wonderland").style.display = "none";
	document.getElementById("highParks").style.display = "none";
	document.getElementById("beaches").style.display = "none";
	document.getElementById("square").style.display = "none";
	document.getElementById("scarborough").style.display = "none";
}

function downtown(){
	hideAll();
	document.getElementById("downtown").style.display = "block";
}

function spa(){
	hideAll();
	document.getElementById("spa").style.display = "block"
}

function transfer(){
	hideAll();
	document.getElementById("transfer").style.display = "block"
}

function restaurant(){
	hideAll();
	document.getElementById("bar").style.display = "block"
}

function waterfall(){
	hideAll();
		document.getElementById("waterfall").style.display = "block"

}

function island(){
	hideAll();
		document.getElementById("island").style.display = "block"

}

function aquarium(){
	hideAll();
	document.getElementById("aquarium").style.display = "block"


}

function wonderland(){
hideAll();
	
	document.getElementById("wonderland").style.display = "block"
}

function highParks(){
	hideAll();

	document.getElementById("highParks").style.display = "block"
}	

function beaches(){
	hideAll();

	document.getElementById("beaches").style.display = "block"
}

function scarborough(){
	hideAll();

	document.getElementById("scarborough").style.display = "block"
}

function square(){
	hideAll();
	document.getElementById("square").style.display = "block"

}




function validateemail() {
  var email = document.getElementById('emailaddress').value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(email == "") {
	document.getElementById("myemailaddress").innerHTML = "Enter Email address";
	return false;
  }
  else if(!(email.match(mailformat))) {
	document.getElementById("myemailaddress").innerHTML = "Please enter correct email address!";
	return false;
  }
  else {
	document.getElementById("myemailaddress").innerHTML = "";
	return true;
  }
}


function validatepassword() {
  var password = document.getElementById('password').value;
  if(password == ""){
	document.getElementById("mypassword").innerHTML = "Enter Password!";
	return false;
  }
  else if(password.length < 6) {
	document.getElementById("mypassword").innerHTML = "Password must exceeds 6 characters!";
	return false;
  }
  else {
	document.getElementById("mypassword").innerHTML = "";
	return true;
  }
}

function Loginform() {
  if (validateemail() && validatepassword()) {
	let SignUpData = JSON.parse(localStorage.getItem("SignUpData"));
	let email = document.getElementById('emailaddress').value;
	let password = document.getElementById('password').value;

	for(let i=0; i < SignUpData.length; i++) {
	  let emailstored = SignUpData[i]["emailaddress"];
	  let passwordstored = SignUpData[i]["password"];

	  console.log(emailstored);
	  console
	  if(emailstored === email && passwordstored === password) {
			window.location.href = "employee-form.html";
			break;
		  }
		}
  }
}
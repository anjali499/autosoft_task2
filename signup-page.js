function validatefirstname() {
  var fn = document.getElementById('firstname').value;
  if(fn.length == 0){
	document.getElementById("myfirstname").innerHTML = "First name can't be left empty";
	return false;
  }
  else if(fn.length > 50) {
	document.getElementById("myfirstname").innerHTML = "First Name must not exceed 50 characters!";
	return false;
  }
  else {
	document.getElementById("myfirstname").innerHTML = "";
	return true;
  }
}

function validatelastname() {
  var ln = document.getElementById('lastname').value;
  if(ln.length == 0) {
	document.getElementById("mylastname").innerHTML = "First name can't be left empty";
	return false;
  }
  else if(ln.length > 50) {
	document.getElementById("mylastname").innerHTML = "First Name must not exceed 50 characters!";
	return false;
  }
  else {
	document.getElementById("mylastname").innerHTML = "";
	return true;
  }
}


function validateemail() {
  var email = document.getElementById('emailaddress').value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(email == "") {
	document.getElementById("myemailaddress").innerHTML = "Email is required!";
	return false;
  }
  else if(!(email.match(mailformat))) {
	document.getElementById("myemailaddress").innerHTML = "Please enter correct email!";
	return false;
  }
  else {
	document.getElementById("myemailaddress").innerHTML = "";
	return true;
  }
}


function validatepassword() {
  var password = document.getElementById('password').value;
  if(password.length == 0) {
	document.getElementById("mypassword").innerHTML = "First name can't be left empty";
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

function validaterepassword() {
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('repassword').value;
  if(repassword.localeCompare(password)) {
	document.getElementById("myrepassword").innerHTML = "Password does not match";
	return false;
  }
  else {
	document.getElementById("myrepassword").innerHTML = "";
	return true;
  }
}


function validateSchoolName() {
  var schoolName = document.getElementById('schoolName').value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(schoolName == "") {
  document.getElementById("employeeSchoolName").innerHTML = "Enter your School Name!";
  return false;
  }
  else {
  document.getElementById("employeeSchoolName").innerHTML = "";
  return true;
  }
}


	
function validateform() {
  if (validatefirstname() && validatelastname() && validateSchoolName() && validateemail() && validatepassword() && validaterepassword()){
	return true
  }
  return false;
}

function signupForm() {
  if (validateform()) {

	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let emailaddress = document.getElementById('emailaddress').value;
	let password = document.getElementById('password').value;
	let schoolName = document.getElementById('schoolName').value;

	let SignUpData = JSON.parse(localStorage.getItem("SignUpData"));

	if (SignUpData == null) {
	  SignUpData = [];
	}

	SignUpData.push({"firstname":firstname,"lastname":lastname,"emailaddress":emailaddress,"password":password,"schoolName":schoolName});
	localStorage.setItem("SignUpData",JSON.stringify(SignUpData));
	
	console.log("success");
  }
}
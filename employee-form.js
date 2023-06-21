function validateName() {
  var firstName = document.getElementById('firstName').value;
  if(firstName.length == 0) {
	document.getElementById("employeeFirstName").innerHTML = "First name can't be left empty";
	return false;
  }
  else if(firstName.length > 50) {
	document.getElementById("employeeFirstName").innerHTML = "First Name must not exceed 50 characters!";
	return false;
  }
  else {
	document.getElementById("employeeFirstName").innerHTML = " ";
	return true;
  }
}

function validateMobile() {
  var mobile = document.getElementById('mobile').value;
  if(mobile == "") {
	document.getElementById("employeeMobile").innerHTML = "Mobile Number is required!";
	return false;
  }
  else if(mobile.length != 10) {
	document.getElementById("employeeMobile").innerHTML = "Mobile number should be of 10 digits";
	return false;
  }
  else {
	document.getElementById("employeeMobile").innerHTML = " ";
	return true;
  }
}

function validateEmail() {
  var email = document.getElementById('email').value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(email == "") {
	document.getElementById("employeeEmail").innerHTML = "Email is required!";
	return false;
  }
  else if(!(email.match(mailformat))) {
	document.getElementById("employeeEmail").innerHTML = "Please enter correct email!";
	return false;
  }
  else {
	document.getElementById("employeeEmail").innerHTML = "";
	return true;
  }
}

function validateAddress() {
  var address = document.getElementById('address').value;
  if(address.length == 0) {
	document.getElementById("employeeAddress").innerHTML = "Address is required";
	return false;
  }
  else if(address.length > 100) {
	document.getElementById("employeeAddress").innerHTML = "Address must not exceed 100 characters!";
	return false;
  }
  else {
	document.getElementById("employeeAddress").innerHTML = "";
	return true;
  }
}

function validateSalary() {
  var salary = document.getElementById('salary').value;
  if(salary.length == 0) {
	document.getElementById("employeeSalary").innerHTML = "Salary is required";
	return false;
  }
  else if(salary.length > 6) {
	document.getElementById("employeeSalary").innerHTML = "Salary must not contain more than 6 digits!";
	return false;
  }
  else {
	document.getElementById("employeeSalary").innerHTML = "";
	return true;
  }
}

function validateAllowance() {
  var allowance = document.getElementById('allowance').value;
  if(allowance.length == 0) {
	document.getElementById("employeeAllowance").innerHTML = "Allowance is required!";
	return false;
  }
  else {
	document.getElementById("employeeAllowance").innerHTML = "";
	return true;
  }
}


	
function validateForm() {
  if (validateName() && validateMobile() && validateEmail() && validateAddress() && validateSalary() && validateAllowance()){
	return true
  }
  return false;
}

function submitForm() {
  if (validateForm()) {

	let firstName = document.getElementById('firstName').value;
	let mobile = document.getElementById('mobile').value;
	let email = document.getElementById('email').value;
	let address = document.getElementById('address').value;
	let designation = document.getElementById('designation').value;
	let salary = document.getElementById('salary').value;
	let allowance = document.getElementById('allowance').value;

	let employeesList = JSON.parse(localStorage.getItem("employeesList"));

	if (employeesList == null) {
	  employeesList = [];
	}

	employeesList.push({"firstName":firstName, "mobile":mobile, "email":email, "address":address, "designation":designation, "salary":salary, "allowance":allowance});
	localStorage.setItem("employeesList",JSON.stringify(employeesList));
	
	console.log("success");
  }
}
function validateEmail() {
  var email = document.getElementById('emailAddress').value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(email == "") {
  	document.getElementById("employeeEmailAddress").innerHTML = "Email is required!";
  	return false;
  }
  else if(!(email.match(mailformat))) {
  	document.getElementById("employeeEmailAddress").innerHTML = "Please enter correct email!";
  	return false;
  }
  else {
  	document.getElementById("employeeEmailAddress").innerHTML = "";
  	return true;
  }
}


function validateSchoolName() {
  var schoolName = document.getElementById('schoolName').value;
  if(schoolName == "") {
    document.getElementById("employeeSchoolName").innerHTML = "Enter your School Name!";
    return false;
  }
  else {
    document.getElementById("employeeSchoolName").innerHTML = "";
    return true;
  }
}


function validatePassword() {
  var password = document.getElementById('password').value;
  if(password.length == 0) {
    document.getElementById("employeePassword").innerHTML = "First name can't be left empty";
    return false;
  }
  else if(password.length < 6) {
    document.getElementById("employeePassword").innerHTML = "Password must exceeds 6 characters!";
    return false;
  }
  else {
    document.getElementById("employeePassword").innerHTML = "";
    return true;
  }
}



function validateConfirmPassword() {
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('confirmPassword').value;
  if(repassword.localeCompare(password)) {
    document.getElementById("employeeConfirmPassword").innerHTML = "Password does not match";
    return false;
  }
  else {
    document.getElementById("employeeConfirmPassword").innerHTML = "";
    return true;
  }
}



function compareEmail() {
  if (validateEmail()) {
    let SignUpData = JSON.parse(localStorage.getItem("SignUpData"));
    let email = document.getElementById('emailAddress').value;

    for(let i=0; i < SignUpData.length; i++) {
      let emailStored = SignUpData[i]["emailaddress"];

      if(emailStored === email) {
        showContentBoxes();
        return false;
        break;
      }
    }
    document.getElementById("employeeEmailAddress").innerHTML = "We can't find your email!";
    return true;
  }
  console.log("success");
}


function compareSchoolName() {
  if (validateSchoolName()) {
    let SignUpData = JSON.parse(localStorage.getItem("SignUpData"));
    let schoolName = document.getElementById('schoolName').value;
    let emailAddress = document.getElementById('emailAddress').value;

    SignUpData.forEach(element=>{
      let storedEmailAddress = element["emailaddress"];
      let storedSchoolName = element["schoolName"];

      if (storedEmailAddress === emailAddress && storedSchoolName === schoolName) {
        showContentBoxes();
      }
    })
    document.getElementById("employeeSchoolName").innerHTML = "Your School Name doesn't match!";
    return true;
  }
  console.log("success");

}
   



function resetPassword() {
  if (validatePassword() && validateConfirmPassword) {
    let SignUpData = JSON.parse(localStorage.getItem("SignUpData"));
    let password = document.getElementById('password').value;
    let schoolName = document.getElementById('schoolName').value;
    let emailAddress = document.getElementById('emailAddress').value;
  
    SignUpData.forEach((element,index)=>{
      let storedEmailAddress = element["emailaddress"];
      let storedSchoolName = element["schoolName"];

      if (storedEmailAddress === emailAddress && storedSchoolName === schoolName) {
        SignUpData[index]["password"] = password;
        localStorage.setItem("SignUpData",JSON.stringify(SignUpData));
        window.location.href = "signin-page.html";
      }
    })
  }
  console.log("success");
}




function showContentBoxes() {
  const contentBox = document.querySelector(".contentBox");
  const contentBox1 = document.querySelector(".contentBox1");
  const contentBox2 = document.querySelector(".contentBox2");

  if (contentBox.style.display === "block") {
    contentBox.style.display = "none";
    contentBox1.style.display = "block";
    contentBox2.style.display = "none";
  }

  else if (contentBox1.style.display === "block") {
    contentBox.style.display = "none";
    contentBox1.style.display = "none";
    contentBox2.style.display = "block";
  }

  else {
    contentBox.style.display = "block";
    contentBox1.style.display = "none";
    contentBox2.style.display = "none";
  }
}
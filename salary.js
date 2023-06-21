function getEmployeeData() {
  let employeesList = JSON.parse(localStorage.getItem("employeesList"));
  if (employeesList == null) employeesList = [];
  let tableBody = document.getElementById("table-body1");
  tableBody.innerHTML = "";

  let tbodyHtml = '';


  for (let i = 0; i < employeesList.length; i++) {
	// let row = tableBody.insertRow(-1);
	
	// c = row.insertCell(0);
	// c1 = row.insertCell(1);
	// c2 = row.insertCell(2);
	// c3 = row.insertCell(3);
	// c4 = row.insertCell(4);
	// c5 = row.insertCell(5);
	

	let firstName = employeesList[i]["firstName"];
	let salary = parseInt(employeesList[i]["salary"]);
	let allowance = parseInt(employeesList[i]["allowance"]);
	let deduction = 0;
	let netsalary = salary + allowance - deduction;

	// c.innerText = i+1;
	// c1.innerHTML =  getoption();
	// c2.innerText = salary;
	// c3.innerText = allowance;
	// c4.innerText =deduction
	// c5.innerText=netsalary;

	let rowHtml = '<tr>';
	rowHtml += '<td id="sn">' + (i + 1) +'</td>';
	rowHtml += `<td id="firstName-${i}" class="firstName">${firstName}</td>`;
	rowHtml += `<td id="salary-${i}" class="salary">${salary}</td>`;
	rowHtml += `<td><input type="text" class="allowance" id="allowance-${i}" value=${allowance}></td>`;
	rowHtml += `<td><input type="text" class="deduction" id="deduction-${i}" value=${deduction}></td>`;
	rowHtml += `<td id="netsalary-${i}">${netsalary}</td>`;

	tbodyHtml += rowHtml;
  }

  tableBody.innerHTML = tbodyHtml;
  addEventToAllowDeduc()
}
getEmployeeData();


function getoption(i) {
  let employeesList = JSON.parse(localStorage.getItem("employeesList"));
  let employeeDropdown = '<select>';
  for (let i = 0; i < employeesList.length; i++) {
	employeeDropdown = employeeDropdown + '<option id=" ' + i + ' "> ' + employeesList[i]["firstName"] + ' </option>'
  }
  return employeeDropdown = employeeDropdown + '</select>';
}


function calNetSalary(i)
{
  let netSalary = document.getElementById(`netsalary-${i}`);
  let salary = parseInt(document.getElementById(`salary-${i}`).innerText);
  let allowance = parseInt(document.getElementById(`allowance-${i}`).value);
  let deduction = parseInt(document.getElementById(`deduction-${i}`).value);

  netSalary.innerText = (salary + allowance) - deduction;
}


function addEventToAllowDeduc() {
  Array.from(document.getElementsByClassName("allowance")).forEach(element=> {
	element.addEventListener("keyup",e=> {
	  let index = parseInt(e.target.id.replace(/^\D+/g,""));
	  calNetSalary(index);
	});
  })

  Array.from(document.getElementsByClassName("deduction")).forEach(element=> {
	element.addEventListener("keyup",e=> {
	  let index = parseInt(e.target.id.replace(/^\D+/g,""));
	  calNetSalary(index);
	});
  })
}




function submitData() {
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;

  if(month == "" && year == "") {
	alert("Please select month and year!");
  }
  else {
	let employeesTableList = JSON.parse(localStorage.getItem("employeesTableList"));

	if (employeesTableList == null) {
	  employeesTableList = [];
	}
	let salaryList=[];

	let noOfRow = document.getElementById("employee").rows.length - 1;
	for (let i = 0; i < noOfRow; i++) {
	  let firstName = document.getElementById(`firstName-${i}`).innerText;
	  let salary = document.getElementById(`salary-${i}`).innerText;
	  let allowance = document.getElementById(`allowance-${i}`).value;
	  let deduction = document.getElementById(`deduction-${i}`).value;

	  salaryList.push ({
		"firstName":firstName,
		"salary":salary,
		"allowance":allowance,
		"deduction":deduction
	  });
	}

	employeesTableList.push({"Salary List":salaryList, "month":month, "year":year});
	localStorage.setItem("employeesTableList",JSON.stringify(employeesTableList));
	
	console.log("success");
	
  }
}
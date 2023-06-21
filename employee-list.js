function getData()
  {
  let employeesList = JSON.parse(localStorage.getItem("employeesList"));
  tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < employeesList.length; i++) {
	let row = tableBody.insertRow(-1);

	c = row.insertCell(0);
	c1 = row.insertCell(1);
	c2 = row.insertCell(2);
	c3 = row.insertCell(3);
	c4 = row.insertCell(4);
	c5 = row.insertCell(5);
	c6 = row.insertCell(6);
	c7 = row.insertCell(7);
	c8 = row.insertCell(8);

	let firstName = employeesList[i]["firstName"];
	let mobile = employeesList[i]["mobile"];
	let email = employeesList[i]["email"];
	let address = employeesList[i]["address"];
	let designation = employeesList[i]["designation"];
	let salary = employeesList[i]["salary"];
	let allowance = employeesList[i]["allowance"];

	c.innerText = i+1;
	c1.innerText = firstName;
	c2.innerText = mobile;
	c3.innerText = email;
	c4.innerText = address;
	c5.innerText = designation;
	c6.innerText = salary;
	c7.innerText = allowance
	c8.innerHTML = '<input type="button" name="del" value="Delete" onclick="del(' + i + ')">';
  }
}

setInterval(() => {
  getData();
},1000)


function del(index) {
  let employeesList = JSON.parse(localStorage.getItem("employeesList"));

  if (employeesList != null) {
	employeesList.splice(index, 1);
	localStorage.setItem("employeesList",JSON.stringify(employeesList));
  }

  getData()
}
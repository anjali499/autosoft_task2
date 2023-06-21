function getSalaryData() {
  let employeesTableList = JSON.parse(localStorage.getItem("employeesTableList"));
  tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < employeesTableList.length; i++) {
	let row = tableBody.insertRow(-1);

	c = row.insertCell(0);
	c1 = row.insertCell(1);
	c2 = row.insertCell(2);
	c3 = row.insertCell(3);
	c4 = row.insertCell(4);


	let firstName = employeesTableList[i]["firstName"];
	let salary = parseInt(employeesTableList[i]["salary"]);
	let allowance = parseInt(employeesTableList[i]["allowance"]);
	let deduction = parseInt(employeesTableList[i]["deduction"]);
	let netsalary = (salary+allowance)-deduction;
	let year = employeesTableList[i]["year"];
	let month = employeesTableList[i]["month"];

	c.innerText = i+1;
	c1.innerText = year;
	c2.innerText = month;
	c3.innerHTML = '<input type="button" name="detail" id="detail" value="Detail" onclick="detail(' + i + ')">';
	c4.innerHTML = '<input type="button" name="del" value="Delete" onclick="del(' + i + ')">';
  }
}

setInterval(() => {
  getSalaryData();
},1000)


function del(index) {
  let employeesTableList = JSON.parse(localStorage.getItem("employeesTableList"));

  if (employeesTableList != null) {
	employeesTableList.splice(index, 1);
	localStorage.setItem("employeesTableList",JSON.stringify(employeesTableList));
  }

  getSalaryData()
}



function detail(index) {
  let employeesTableList = JSON.parse(localStorage.getItem("employeesTableList"));
  tableBody = document.getElementById("tableDetail-body");
  tableBody.innerHTML = "";
  let j=1;

  employeesTableList[index]["Salary List"].forEach(element => {
	let row = tableBody.insertRow(-1);

	c = row.insertCell(0);
	c1 = row.insertCell(1);
	c2 = row.insertCell(2);
	c3 = row.insertCell(3);
	c4 = row.insertCell(4);
	c5 = row.insertCell(5);

	let firstName = element["firstName"];
	let salary = parseInt(element["salary"]);
	let allowance = parseInt(element["allowance"]);
	let deduction = parseInt(element["deduction"]);
	let netsalary = (salary + allowance) - deduction;

	c.innerText = j++;
	c1.innerText = firstName;
	c2.innerText = salary;
	c3.innerHTML = allowance;
	c4.innerHTML = deduction;
	c5.innerHTML = netsalary;

  })
  showEmployeeSalaryDetail();
}



function showEmployeeSalaryDetail() {
	const content = document.querySelector(".content");
	const content1 = document.querySelector(".content1");

	if (content.style.display==="block") {
		content.style.display = "none";
		content1.style.display = "block";
	}

	else{
		content.style.display = "block";
		content1.style.display = "none";
	}
}
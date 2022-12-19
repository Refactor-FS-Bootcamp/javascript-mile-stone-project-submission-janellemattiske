// Importing Department Model to add new Department
import { DepartmentModel } from "../model/BaseModel.js";
// Importing Department Implementation to Perform department Related Operation
import DepartmentImplementation from "../Implementation/DepartmentImpementation.js";

// input tag to get the name of the department
let name = document.getElementById("deptName");
// Department Implementation  Object to Perform All the Department Related  Operation
let implementation = new DepartmentImplementation();

// this just to make Sure This is working or Not
// console.log(implementation);

//
document.getElementById("submit").addEventListener("click", (event) => {
  //    to prevent the Default behavior of Form here , we using prevent Default
  event.preventDefault();
  // creating Model of Department
  let department = new DepartmentModel(name.value);
  implementation.Add(department);
  console.log(implementation);

  alert("added successfully");

  name.value = "";
});


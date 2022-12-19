// Importing Employee Model from BaseModel
// Importing EmployeeImplementation To Perform All the Operation Related to Employee 
import {EmployeeModel} from "../model/BaseModel.js"
import EmployeeImplementation from "../Implementation/EmployeeImplementation.js"

// Setting Input into Variable from Which Data Will get Retrieve 
let name = document.getElementById("empName")
let age = document.getElementById("age")


// eventLister to Submit Button to Add Data to the List 
document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault()
    // Creating Objects of Employee and  EmployeeImplementation to Perform and Push data into list 
    let employee = new EmployeeModel(name.value,age.value)
    let implementation = new EmployeeImplementation
    // Performing Add Operation withe the help of EmployeeImplementation object to insert data into list  
    implementation.Add(employee)

    // to give msg that data is update Successfully
    alert("added successfully")

    name.value =""
    age.value =""

})


































































































// submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let empName = document.getElementById("empName").value
//     let email = document.getElementById("email").value
//     let mobile = document.getElementById("mobile").value
//     let age = document.getElementById("age").value


//     // Storing All data in Employee Object
//    let employe = new Employee(empName,email,mobile,age);
// //    employe.getID();

//     LocalStorage.addToLocalStore("emp",employe);

//     console.log(LocalStorage.retriveData("emp"))


//     alert("data has Been Stored SucessFully")

//     document.getElementById("empName").value = ""
//     document.getElementById("email").value = ""
//     document.getElementById("mobile").value = ""
//     document.getElementById("age").value  = ""




// })
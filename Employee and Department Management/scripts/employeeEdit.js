import EmployeeImplementation from "../Implementation/EmployeeImplementation.js";
import {URLDecoder} from "../scripts/Utility.js"
let Implementation  =new EmployeeImplementation

//  UI Elements Buttons
let update = document.getElementById("update")
let cancel = document.getElementById("cancel")
let name = document.getElementById("empName")
let age = document.getElementById("age")


// Parsing URl Using URl searchParams
let id = URLDecoder(window.location.href)


// UI EventListener to Update Data From the List 
update.addEventListener("click",(e)=>{
e.preventDefault()
   
    if(name.value&&age.value)
    {
        let obj = {
            id :id,
            name : name.value,
            age : age.value 
        }
        Implementation.Update(id,obj)
        alert("updated Successfully")
        window.location.replace("../pages/employee.html")
    }
    else{
     alert("Name or age is Please Empty Fill Fist")   
    }

})

// UI EventListener to cancel Data From the List
cancel.addEventListener("click",(e)=>{
e.preventDefault()

let result = confirm("Are you Sure you don't want to Edit ?")
if(result)
{
    window.location.replace("../pages/employee.html")
}
else{
    return;
}

}) 
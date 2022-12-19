import DepartmentImplementation from "../Implementation/DepartmentImpementation.js"
import {URLDecoder} from "../scripts/Utility.js"

let Implementation  =new DepartmentImplementation
console.log(Implementation)
//  UI Elements Buttons
let update = document.getElementById("update")
let cancel = document.getElementById("cancel")
let name = document.getElementById("deptName")

// Parsing URl Using URl searchParams
let id = URLDecoder(window.location.href)

// UI EventListener to Update Data From the List 
update.addEventListener("click",(e)=>{
    e.preventDefault()
       
        if(name.value)
        {
            let obj = {
                id :id,
                dept_name : name.value,

            }
            console.log(obj)
            Implementation.Update(id,obj)
            alert("updated Successfully")
            window.location.replace("../pages/departmnet.html")
        }
        else{
         alert("Name  is Please Empty Fill Fist")   
        }
    
    })
    
// UI EventListener to Update Data From the List
cancel.addEventListener("click",(e)=>{
    e.preventDefault()
    
    let result = confirm("Are you Sure you don't want to Edit ?")
    if(result)
    {
        window.location.replace("../pages/departmnet.html")
    }
    else{
        return;
    }
    
    }) 



import EmployeeImplementation from "../Implementation/EmployeeImplementation.js";
import CreateTable, { checkAttribute } from "./Utility.js";


let table = document.getElementById("tbody");
//  Global  Variable
let Implementation = new EmployeeImplementation();

let pageState = JSON.parse(localStorage.getItem("pageStateEmp")) ?? localStorage.setItem(
  "pageStateEmp",
  JSON.stringify({
    page: 1,
    rows: 10,
  })
); 


// Trimmed Data from
let data = Implementation.updateRecords(pageState?.page,pageState?.rows);
console.log(data)
// Creating Table Dynamically AnyWhere
CreateTable(data.dataSet,table,pageState);
// they Both Functions Are WrapUP of Edit and delete Button UI so that they can render Properly after Creating Table
Edit();
Delete();

//  UI EventListener For Search
document.getElementById("search").addEventListener("input",(event)=>{

  
  let SearchData = Implementation.search(event.target.value)
  if(event.target.value)
  {
    CreateTable(SearchData,table,pageState)
    Edit();
    Delete();

  }
  else{
    window.location.reload()
  }
 
})


/********** here I am Using Jquery For particular just make code Clean ********/ 

// Edit Portion
//  UI event => when User click on the Edit button it will trigger this event
function Edit()
{
  $(".edit").click(function () {
    let id = checkAttribute(this);
    window.location.replace("../pages/EmployeeEdit.html" + `?id=${id}`);
  });
}
// Js Version
// {code goes Here}

// Delete Portion
//  UI event => when User click on the Delete button it will trigger this event
function Delete()
{
  $(".delete").click(function () {
    let id = checkAttribute(this);
    let result = confirm("Are Your sure to Delete the Data ");
    if (result) {
      Implementation.Delete(id);
      window.location.reload();
    }
  });
}
// JS Version Code Goes Here 

/********** here I am Using Jquery For particular just make code Clean ********/ 



// Pagination Buttons

// First Button
document.getElementById("first").addEventListener("click", () => {
  if (pageState.page != 1) {
    pageState.page = 1;
    localStorage.setItem("pageStateEmp", JSON.stringify(pageState));
    window.location.reload();
  }
});

// Last Button
document.getElementById("last").addEventListener("click", () => {
  if (pageState.page != data.pages) {
    pageState.page = data.pages;
    localStorage.setItem("pageStateEmp", JSON.stringify(pageState));
    window.location.reload();
  }
});

// Next button
document.getElementById("next").addEventListener("click", () => {
  if (pageState.page < data.pages) {
    pageState.page++;
    localStorage.setItem("pageStateEmp", JSON.stringify(pageState));
    window.location.reload();
  }
});
// Prev Button
document.getElementById("prev").addEventListener("click", () => {
  if (pageState.page > 1) {
    pageState.page--;
    localStorage.setItem("pageStateEmp", JSON.stringify(pageState));
    window.location.reload();
  }
});


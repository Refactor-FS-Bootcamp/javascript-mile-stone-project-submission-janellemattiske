import DepartmentImplementation from "../Implementation/DepartmentImpementation.js"
import { checkAttribute } from "./Utility.js"
import CreateTable  from "./Utility.js"



let table = document.getElementById("table").getElementsByTagName("tbody")[0]
let Implementation = new DepartmentImplementation()

// Setting Page State if it is null For First Time It Should Get initialized
let pageState = JSON.parse(localStorage.getItem("pageStateDept")) ?? localStorage.setItem(
  "pageStateDept",
  JSON.stringify({
    page: 1,
    rows: 10,
  })
); 

// data Come After Getting Trimmed
let data = Implementation.updateRecords(pageState?.page,pageState?.rows);



// Creating Table Dynamically AnyWhere
CreateTable(data.dataSet, table,pageState);

// in the Both Function they are Just wrapUP EVentListerUI 
// So that every time Table Render Event Listeners Work Properly  
Edit();
Delete();

//  UI EventListener For Search 
document.getElementById("search").addEventListener("input",(event)=>{
// this search is Working Old Way Till Now
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


/*these are done Using Jquery Because of particular Purpose this can also be done Using JS */
//  UI event => when User click on the Edit button it will trigger this event

function Edit()
{
  $(".edit").click(function () {
    let id = checkAttribute(this);
    window.location.replace("../pages/DepartmentEdit.html" + `?id=${id}`);
  });
}
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
  
  /*these are done Using Jquery Because of particular Purpose  this can also be done Using JS  */


  // Pagination Buttons

// First Button
document.getElementById("first").addEventListener("click", () => {
  if (pageState.page != 1) {
    pageState.page = 1;
    localStorage.setItem("pageStateDept", JSON.stringify(pageState));
    window.location.reload();
  }
});

// Last Button
document.getElementById("last").addEventListener("click", () => {
  if (pageState.page != data.pages) {
    pageState.page = data.pages;
    localStorage.setItem("pageStateDept", JSON.stringify(pageState));
    window.location.reload();
  }
});

// Next button
document.getElementById("next").addEventListener("click", () => {
  if (pageState.page < data.pages) {
    pageState.page++;
    localStorage.setItem("pageStateDept", JSON.stringify(pageState));
    window.location.reload();
  }
});
// Prev Button
document.getElementById("prev").addEventListener("click", () => {
  if (pageState.page > 1) {
    pageState.page--;
    localStorage.setItem("pageStateDept", JSON.stringify(pageState));
    window.location.reload();
  }
});


//  All Utility Function Are Declared here

// this Function Will Help you Create Dynamic Table irrespective og ht eNumber og Elements 
export default function CreateTable(array,tbody,pageState)
{
    tbody.innerHTML = "";
  
    array.forEach((element,index) => {
        let values = Object.values(element)
        let newRow = tbody.insertRow(tbody.length);
        newRow.insertCell(0).textContent = (pageState.page-1)*10 + (index+1)
        values.forEach((value,keyNumber)=>{
            
            if(typeof value =="string")
            {
                newRow.insertCell(keyNumber+1).textContent = value
            }
            else{
                let IdCell = newRow.insertCell(keyNumber+1)
                IdCell.innerHTML = value
                IdCell.style.display = "none"
                IdCell.id= value
            }

        })
        newRow.insertCell(values.length+1).innerHTML = `<button class ="btn btn-primary ms-2 edit" ><i class="fa-solid fa-pen-to-square"></i></button> 
        <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></button>`;
    });

    document.getElementById("currentPage").textContent = pageState?.page ?? 1;
} 


// To Check weather the Attribute is Preset or not of Present 

// Check Wether the attribute is there or not
export function checkAttribute(t)
{ 
    let row = t.parentElement.parentElement;
   let cells = Array.from(row.cells);
    for(let item of cells)
    {
        if (item.hasAttribute("id"))
        {
            return item.getAttribute("id")
        }
      
    }
    return -1
}

//  this Function Decode the URl and give you the id 
export function URLDecoder(URL)
{
let [Path] = new URLSearchParams(URL )
let [,id] = Path;
 return +id ;
}
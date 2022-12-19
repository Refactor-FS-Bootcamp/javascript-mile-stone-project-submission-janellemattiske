
/* Importing BaseImplementation So that EmployeeImplementation can get 
   Inherit From it and Use all the Function What it Desire to use 
*/

import BaseImplementation from "./BaseImplementation.js";


export default class EmployeeImplementation extends BaseImplementation{
    constructor(){
        // setting key for Employee inside Local Storage
        super("emp");
    }


}

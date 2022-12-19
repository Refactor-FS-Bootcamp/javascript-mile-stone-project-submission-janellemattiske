/* Importing BaseImplementation So that DepartmentImplementation can get 
   Inherit From it and Use all the Function What it Desire to use 
*/

import BaseImplementation from "./BaseImplementation.js";

// exporting DepartmentImplementation So that it can be used Everywhere
export default class DepartmentImplementation extends BaseImplementation{
    constructor(){
        // setting key for Department inside Local Storage
        super("dept");
    } 
}

// Creating Base Model 
class BaseModel{
    constructor(){
        this.id = 0
     }
};
// Creating Employee Model which is inheriting Form Base Model
export class EmployeeModel extends BaseModel{
    constructor(name,age){
        super()
        this.name  = name;
        this.age = age;
    }
}

// Creating Department Model which his Inheriting from Base Model 
export class DepartmentModel extends BaseModel{
    constructor(name){
        super()
        this.dep_name  = name;
    }
}

export default BaseModel ;
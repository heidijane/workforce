import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { ShowEmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/departmentProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(ShowEmployeeList)
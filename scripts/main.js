import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { ShowEmployeeList } from "./employees/EmployeeList.js";

getEmployees()
    .then(getComputers)
    .then(ShowEmployeeList)
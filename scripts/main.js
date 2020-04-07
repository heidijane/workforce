import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { ShowEmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/departmentProvider.js";
import { getLocations } from "./computers/locations/locationProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(ShowEmployeeList)
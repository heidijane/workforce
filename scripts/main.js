import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { ShowEmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/departmentProvider.js";
import { getLocations } from "./computers/locations/locationProvider.js";
import { getCustomers } from "./customers/customerProvider.js";
import { getEmployeeCustomers } from "./employees/employeeCustomerProvider.js";
import { ShowCustomerList } from "./customers/CustomerList.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(ShowEmployeeList)
    .then(ShowCustomerList)
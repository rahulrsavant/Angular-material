import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    public employees:IEmployee[];

  

  constructor(private _employeeService: EmployeeService) 
  { 
    this.employees=this._employeeService.getEmployee();
  }

  ngOnInit(): void {
    console.log("Employee List : ")
        console.log(this.employees);
  }

}

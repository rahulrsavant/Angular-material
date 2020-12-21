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

    private _employeeService: EmployeeService;

  constructor(private _employeeService1: EmployeeService) 
  { 
    this._employeeService=_employeeService1;
  }

  ngOnInit(): void {
        console.log(this._employeeService.getEmployee());
  }

}

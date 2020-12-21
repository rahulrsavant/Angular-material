import { Injectable } from '@angular/core';
import{IEmployee} from'./employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee():IEmployee[]{
    return[
      {code:'emp101',name:'ram',gender:'Male',annualSalary:5000,dateOfBirt:'6/25/1988'},
      {code:'emp101',name:'seeta',gender:'Female',annualSalary:5000,dateOfBirt:'6/25/1988'}
    ];
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee }   from '../models/employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL_API = 'http://localhost:4000/api/employees'
  
  employees: Employee[]

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get<Employee[]>(this.URL_API)
  }
}

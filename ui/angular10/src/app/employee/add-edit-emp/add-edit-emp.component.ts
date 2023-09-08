import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string;
  EmployeeName:string;
  EmployeeNota:string;
  DateOfJoining:string;


  ngOnInit(): void {

  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                EmployeeNota:this.EmployeeNota,
              DateOfJoining:this.DateOfJoining}

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      EmployeeNota:this.EmployeeNota,
    DateOfJoining:this.DateOfJoining,
};
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}


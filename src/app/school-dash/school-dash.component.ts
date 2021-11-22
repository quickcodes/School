import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchoolData } from './school.models';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-school-dash',
  templateUrl: './school-dash.component.html',
  styleUrls: ['./school-dash.component.css']
})
export class SchoolDashComponent implements OnInit {

  formValue!:FormGroup

  // Creating object
  schoolModelObj:SchoolData = new SchoolData;
  allUserData:any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      mobile:['']
    })
    this.getAllData()
  }

  // Subscribing out Data
  addUser(){
    this.schoolModelObj.name = this.formValue.value.name;
    this.schoolModelObj.mobile = this.formValue.value.mobile;

    this.api.postUser(this.schoolModelObj).subscribe(res=>{
      console.log(res);
      alert("User Added Succesfully");

      // clear fill form data 0
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData()
    },
    err=>{
      alert("Something went wrong");
    }
    )
  }

  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  getAllData(){
    this.api.getUser().subscribe(res=>{
      this.allUserData = res;
    })
  }

  deleteUser(data:any){
    this.api.deleteUser(data.id).subscribe(res=>{
      alert("User Record deleted");
      this.getAllData()
    })
  }

  onEditUser(data:any){
    this.showAdd = false;
    this.showBtn = true;
    this.schoolModelObj.name = data.name;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['mobile'].setValue(data.mobile);
  }

  updateUser(){
    this.schoolModelObj.name = this.formValue.value.name;
    this.schoolModelObj.mobile = this.formValue.value.mobile;

    this.api.updateUser(this.schoolModelObj,this.schoolModelObj.name).subscribe(res=>{
      alert("User Record Updated");

      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData()

    },
    err=>{
      alert("Something went wrong");
    })
  }

}

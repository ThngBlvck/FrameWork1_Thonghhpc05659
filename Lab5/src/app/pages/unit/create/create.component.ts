import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnitService } from 'src/app/@core/service/api/unit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  [x: string]: any;
  addForm!: FormGroup;
  createForm!: FormGroup;

  constructor(private unitService: UnitService, private BackToHome:Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',[Validators.required, ]),
      address: new FormControl('',[Validators.required,]),
      description: new FormControl('',[Validators.required,])
    });
  }
  // onSubmit(){
  //   if(this.addForm.valid){
  //     this.authService.create(this.addForm.value).subscribe((gh)=>{
       
  //     })
  //   }
  // }
  // protected handleCreateSuccess(res: any) {
  //  console.log(res);
  // }
  // protected handleCreateFailed() {
  // }
  create() {
    this.unitService.addUnit(this.addForm.value).subscribe(res => {
      this.BackToHome.navigate(['/unit'])
      console.log(res);
    });
  }
}

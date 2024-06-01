import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnitService } from 'src/app/@core/service/api/unit.service';
import { UnitInfoModel } from '../unit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateUint!: FormGroup;
  ListById!: UnitInfoModel;
  id: string;

  constructor(
    private unitService: UnitService, 
    private route: ActivatedRoute, 
    private router: Router 
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.updateUint = new FormGroup({
      name: new FormControl('',[Validators.required, ]),
      address: new FormControl('',[Validators.required, ]),
      description: new FormControl('',[Validators.required, ])
    });
    this.editUnit(this.id);
  }

  editUnit(id: string) {
    this.unitService.getUnitByid(id).subscribe(res => {
      this.ListById = res.data;
      this.updateUint.patchValue(this.ListById);
    });
  }

  saveEditUnit() {
    this.unitService.updateUnit(this.id, this.updateUint.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/unit']);
    });
  }
}

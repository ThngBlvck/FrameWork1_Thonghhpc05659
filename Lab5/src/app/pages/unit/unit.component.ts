import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/@core/service/api/unit.service';

export interface UnitInfoModel {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at : string;
  updated_at : string;
}

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  List!: UnitInfoModel[];

  constructor(
    private unit: UnitService
  ) { }

  ngOnInit(): void {
    this.getUnit();
  }
  getUnit(){
    this.unit.getAllUnit().subscribe(res =>{
      this.List = res;
      console.log(res);
    },error => {
      console.log(error);
  });
  }
  deleteU(id: string){
    this.unit.deleteUnit(id).subscribe(res => {
     console.log(res); 
    })
  }
}

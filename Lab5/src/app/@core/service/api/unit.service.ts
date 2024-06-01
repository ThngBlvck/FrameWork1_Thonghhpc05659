import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UnitInfoModel {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient) {}

  getAllUnit(): Observable<any> {
    return this.http.get('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit');
  }

  addUnit(add: UnitInfoModel): Observable<any> {
    return this.http.post('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit', add);
  }

  postUnit(unit: UnitInfoModel): Observable<any> {
    return this.http.post('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit', {
      name: unit.name,
      address: unit.address,
      description: unit.description
    });
  }

  deleteUnit(id: string): Observable<any> {
    return this.http.delete('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit/' + id);
  }

  getUnitByid(id: string): Observable<any> {
    return this.http.get('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit/' + id);
  }

  updateUnit(id: string, unit: UnitInfoModel): Observable<any> {
    return this.http.put('https://65a36a6aa54d8e805ed39c3a.mockapi.io/api/unit/' + id, {
      name: unit.name,
      address: unit.address,
      description: unit.description
    });
  }
}
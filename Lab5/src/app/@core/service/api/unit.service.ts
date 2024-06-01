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
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit');
  }

  addUnit(add: UnitInfoModel): Observable<any> {
    return this.http.post('https://knowledgehub.demopolyct.online/api/unit', add);
  }

  postUnit(unit: UnitInfoModel): Observable<any> {
    return this.http.post('https://knowledgehub.demopolyct.online/api/unit', {
      name: unit.name,
      address: unit.address,
      description: unit.description
    });
  }

  deleteUnit(id: string): Observable<any> {
    return this.http.delete('https://knowledgehub.demopolyct.online/api/unit/' + id);
  }

  getUnitByid(id: string): Observable<any> {
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit/' + id);
  }

  updateUnit(id: string, unit: UnitInfoModel): Observable<any> {
    return this.http.put('https://knowledgehub.demopolyct.online/api/unit/' + id, {
      name: unit.name,
      address: unit.address,
      description: unit.description
    });
  }
}
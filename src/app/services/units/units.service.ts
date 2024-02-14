import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsResponse } from 'src/app/models/units-response.model';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  constructor(private http: HttpClient) {}

  getAllUnits(): Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(
      `${environment.URL_API}/locations.json`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  public getAllLocations(): Observable<LocationResponse> {
    return this.http.get<LocationResponse>('/admin/location');
  }

  public deleteALocation(locationId: string): Observable<LocationResponse> {
    const payload = {
      location_id: locationId
    }
    return this.http.post<LocationResponse>('/admin/location-delete', payload);
  }

  public addNewLocations(location: string): Observable<any> {
    const payload = {
      location: location
    };
    return this.http.post('/admin/location', payload);
  }
}

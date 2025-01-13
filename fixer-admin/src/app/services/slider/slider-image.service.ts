import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SliderImageResponse } from 'src/app/models/slider_image';

@Injectable({
  providedIn: 'root'
})
export class SliderImageService {

  constructor(private http: HttpClient) { }

  public getAllSliderImages(): Observable<SliderImageResponse> {
    return this.http.get<SliderImageResponse>('/admin/slider-image');
  }

  public addNewSliderImage(slider_image: string): Observable<any> {
    const payload = {
      slider_image: slider_image
    };
    return this.http.post('/admin/slider-image', payload);
  }
}

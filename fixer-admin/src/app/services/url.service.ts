import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  static readonly URL = "http://localhost:8080/admin";

  constructor() { }
}

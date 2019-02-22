import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(
    private http: HttpClient
  ) { }

  getImages() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://api.unsplash.com/photos/random?page=3&count=24&orientation=portrait&query=abstract&client_id=d1d5ef485cf82d8c78cf16571a053f7808b0a33a0a6fcff22510ba34f2bf3926`);
  }
}

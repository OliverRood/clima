import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'http://api.ipstack.com/check';
  private key = 'c8b3ac1f0bdbf38ebea8473dc8076455';

  constructor(private http: HttpClient) { }

  getLocation(){
    const params = new HttpParams().set('access_key', this.key);
    return this.http.get(this.baseUrl, {params});
  }
}

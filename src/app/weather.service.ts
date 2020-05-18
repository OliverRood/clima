import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private baseUrl = 'http://www.7timer.info/bin/civillight.php?lon=-107.3&lat=24.7&ac=0&unit=metric&output=json';

  constructor(private http: HttpClient) { }

  getWeather(longitude, latitude){
    const data = {
      lon: longitude,
      lat: latitude
    };
    const params = new HttpParams({fromObject:data});
    console.log(this.baseUrl, {params});
    return this.http.get(this.baseUrl, {params});
  }
  
    /*

  loadWeather() {
    this.locationAPI.getLocation().pipe(
      switchMap((data: any) => this.weatherAPI.getWeather(data.latitude, data.longitude)
        .pipe(map(innerData => [data, innerData])))
    ).subscribe(
      finalData => {
        this.weatherInfo = finalData;
      }, error =>{
        alert(error);
      }
    );
  }
  */
}

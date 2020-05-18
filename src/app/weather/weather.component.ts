import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  //geoInfo: any;
  weatherInfo: any;
  loaded = false;

  //imagenes
  clear="https://image.flaticon.com/icons/svg/2938/2938075.svg";
  pcloudy = "https://image.flaticon.com/icons/svg/2938/2938072.svg";
  cloudy="https://image.flaticon.com/icons/svg/2938/2938066.svg";
  rain="https://image.flaticon.com/icons/svg/2938/2938083.svg";
  snow="https://image.flaticon.com/icons/svg/2938/2938096.svg";
  ts="https://image.flaticon.com/icons/svg/2938/2938082.svg";
  tsrain="https://image.flaticon.com/icons/svg/2938/2938092.svg";

  constructor(private weatherAPI: WeatherService, private locationAPI: LocationService) { }

  ngOnInit() {
    this.locationAPI.getLocation().subscribe(
      (data : any)=> {
        this.getClima(data.longitude, data.latitude);
      },
      error => {
        alert(error);
      });
  }

  getClima(longitude, latitude){
    this.weatherAPI.getWeather(longitude, latitude).subscribe(
      data => {
        this.weatherInfo = data.dataseries;
        this.loaded = true;
      },
      error => {
        alert(error);
      });
  }

  dateOrder(date){
    let year = date.toString().substring(0,4);
    let month = date.toString().substring(4,6);
    let day = date.toString().substring(6,8);
    return year+'-'+month+day;
  }

  getImg(weatherC){
    switch(weatherC){
      case "clear":
        return this.clear;
      break;
      case "pcloudy":
        return this.pcloudy;
      break;
      case "cloudy":
        return this.cloudy;
      break;
      case "rain":
        return this.rain;
      break;
      case "snow":
        return this.snow;
      break;
      case "ts":
        return this.ts;
      break;
      case "tsrain":
        return this.tsrain;
      break;
    }
  }

  /*

  loadWeather(longitude, latitude){
    this.weatherAPI.getWeather(longitude, latitude).subscribe(
      data => {
        this.weatherInfo = data;
      },
      error => {
        alert(error);
      });
  }


  loadGeolocation(){
    this.locationAPI.getLocation().subscribe(
      data => {
        this.geoInfo = data;
      },
      error => {
        alert(error);
      });
  }

  
  loadWeather(longitude, latitude){
    this.weatherAPI.getWeather(longitude, latitude).subscribe(
      data => {
        this.weatherInfo = data;
      },
      error => {
        alert(error);
      });
  }
  */

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

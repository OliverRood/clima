import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  loaded = false;
  date = new Date();
  cityInfo: any;

  constructor(private locationAPI: LocationService) { }

  ngOnInit() {
    this.locationAPI.getLocation().subscribe(
      data => {
        this.loaded = true;
        this.cityInfo = data;
      },
      error => {
        alert(error);
      });
  }

}

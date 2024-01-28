import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '804189a77488cb68683590ab7ca9c19f';
  URI: string = '';
  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName:string,countryCode:string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);


   }
}

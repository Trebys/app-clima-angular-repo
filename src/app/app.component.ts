import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service'; 
import { error } from 'console';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  weather:any;
  constructor(private wheatherSevice:WeatherService){

  }

ngOnInit(): void {
 
}

getWeather(nombreCiudad:string,codigoPais:string){
  this.wheatherSevice.getWeather(nombreCiudad, codigoPais)
  .subscribe(
    res => {
      console.log(res);
      this.weather = res
    },
    err => console.log(err)
  )

}

submitLocation(nombreCiudad: HTMLInputElement,codigoPais: HTMLInputElement){
  if(nombreCiudad.value && codigoPais.value){
    this.getWeather(nombreCiudad.value,codigoPais.value);

    nombreCiudad.value = '';
    codigoPais.value = '';

  } else{
    alert("Favor, Ingrese algunos valores")
  }
 
  nombreCiudad.focus();
  return false;

}

  
}

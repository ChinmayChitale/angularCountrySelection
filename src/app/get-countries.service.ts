import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { countries } from './country-details/country-details.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  private headers: HttpHeaders;
  private getEuropeCountriesUrl = 'https://restcountries.eu/rest/v2/region/europe';  // URL to web api europe
  private getAsiaCountriesUrl = 'https://restcountries.eu/rest/v2/region/asia';  // URL to web api asia

  private mockgetAsiaCountries: countries[] = [
    {
      name: 'India',
      id: 1
    },
    { 
      name:'China',
      id: 2
    },
    {
      name:'Japan',
      id: 3
    }
];

private mockgetEuropeCountries: countries[] = [
  {
    name: 'France',
    id: 4
  },
  { 
    name:'Germany',
    id: 5
  },
  {
    name:'Italy',
    id: 6
  }
];

  constructor(
    private http: HttpClient
  ) 
  { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getEuropeCountries()    
  {    
    // Api call commented out as the api call is not fetching response as it is getting timed out 

    //return this.http.get<CountryDetailsComponent[]>(`${this.getEuropeCountriesUrl}`);

    return this.mockgetEuropeCountries;
  }

  getAsiaCountries ()     
  {    
    // Api call commented out as the api call is not fetching response as it is getting timed out 

    //return this.http.get<CountryDetailsComponent[]>(`${this.getAsiaCountriesUrl}`);

    return this.mockgetAsiaCountries;
  }
}

import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from '../get-countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  regionList = [
    {name:'Asia',id:1},
    {name:'Europe',id:2}
  ];

  currentSelection = {};

  public countryList:any = {};

  constructor(
    private apiService:GetCountriesService
) {}

  ngOnInit(): void { }

  ngDoCheck() :void{
    
    if(this.currentSelection == 1) {
      this.getAsiaCountryList();
    }
    else if(this.currentSelection == 2){
      this.getEuropeCountryList();
    }
  }

  public getEuropeCountryList (){
   
    // Subscription to api service commented out as the api call is not fetching response as it is getting timed out 

    //  this.apiService.getEuropeCountries().subscribe((res)=>{
    //   console.log(res);
    //   this.countryList = res;
    // }); 

    //Local mock response to service call 

    this.countryList = this.apiService.getEuropeCountries();
  }

  public getAsiaCountryList (){
    
    // Subscription to api service commented out as the api call is not fetching response as it is getting timed out 

    //  this.apiService.getAsiaCountries().subscribe((res)=>{
    //   console.log(res);
    //   this.countryList = res;
    // });

    //Local mock response to service call 

    this.countryList = this.apiService.getAsiaCountries();
  }
}

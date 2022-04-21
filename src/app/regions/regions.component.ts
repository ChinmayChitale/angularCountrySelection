import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from '../get-countries.service';
import { RegionStore } from '../store/region.store';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  providers:[RegionStore]
})
export class RegionsComponent implements OnInit {

  regions$ = this.regionsStore.regions$;

  public currentSelection = {};

  public countryList:any = {};

  constructor(
    private apiService:GetCountriesService,
    private regionsStore:RegionStore
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

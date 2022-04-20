import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

currentSelection = {};

countryDetails = [
  {id:1,name:'India',capital:'New Delhi',population:'1,404,272,945',currency:'Rupee',flag:''},
  {id:2,name:'China',capital:'Beijing',population:'1,449,266,127',currency:'Renminbi',flag:''},
  {id:3,name:'Japan',capital:'Tokyo',population:'125,698,328',currency:'Japanese yen',flag:''},
  {id:4,name:'France',capital:'Paris',population:'65,531,091',currency:'Euro',flag:''},
  {id:5,name:'Germany',capital:'Berlin',population:'84,262,438',currency:'Euro',flag:''},
  {id:6,name:'Italy',capital:'Rome',population:'60,302,798',currency:'Euro',flag:''}
];

public countryData:any;

@Input() countryList:any;

  constructor() { }

  ngOnInit(): void {}

  ngDoCheck() :void{
    this.countryData = this.countryDetails.find(item => item.id == this.currentSelection); 
  }

}

export interface countries {
  id:number,
  name:string
}

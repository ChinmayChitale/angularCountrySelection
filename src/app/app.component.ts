import { Component } from '@angular/core';
import { RegionStore } from './store/region.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[RegionStore]
})
export class AppComponent {
  title = 'angularCountrySelection';
}

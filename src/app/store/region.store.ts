import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";
import { Region } from "./models/region.model";

export interface RegionState {
    regions:Region[];
}

@Injectable()
export class RegionStore extends ComponentStore<RegionState> {
    constructor(
      ) {
        super({
            regions: [
                {name:'Asia',id:1},
                {name:'Europe',id:2}
              ]
        });
      }

    regions$: Observable<Region[]>  =this.select((state) => state.regions);
}
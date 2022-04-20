import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if getAsiaCountryList called ', () => {
    component.currentSelection = 1;
    component.getAsiaCountryList();
    expect(component.getAsiaCountryList).not.toBeFalse();
});

it('check if getEuropeCountryList called ', () => {
  component.currentSelection = 2;
  component.getEuropeCountryList();
  expect(component.getEuropeCountryList).not.toBeFalse();
});

});

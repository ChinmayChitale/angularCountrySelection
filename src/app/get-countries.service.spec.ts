import { TestBed } from '@angular/core/testing';

import { GetCountriesService } from './get-countries.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('GetCountriesService', () => {
  let service: GetCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GetCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

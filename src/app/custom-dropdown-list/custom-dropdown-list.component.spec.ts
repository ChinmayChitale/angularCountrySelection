import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownListComponent } from './custom-dropdown-list.component';

describe('CustomDropdownListComponent', () => {
  let component: CustomDropdownListComponent;
  let fixture: ComponentFixture<CustomDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDropdownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

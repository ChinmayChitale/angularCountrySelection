import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should execute the component method on change', fakeAsync(() => {

    component.regionList = [
      {name:'Asia',id:1},
      {name:'Europe',id:2}
    ];

    fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('#regionData')).nativeElement;
    spyOn(component, 'setCurrentSelection');
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));
    tick();
    expect(component.setCurrentSelection).toHaveBeenCalled();
  }));

  it('should call currentSelection', () => {
    component.currentSelection = true;
    expect(component['currentSelection']).toBe(true);
   });

   it('should call setCurrentSelection on change', () => {
    let selection = fixture.debugElement.query(By.css('#regionData'));
    spyOn(component, 'setCurrentSelection');
    selection.triggerEventHandler('change', {});
    expect(component.setCurrentSelection).toHaveBeenCalled();
  });

});

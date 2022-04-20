import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown-list',
  templateUrl: './custom-dropdown-list.component.html',
  styleUrls: ['./custom-dropdown-list.component.scss']
})
export class CustomDropdownListComponent {

  emptyDataSelection = {
    name: 'Select'
  };

  @Input() regionList: any;
  @Output() currentSelectionChange = new EventEmitter<object>();
  _currentSelection: any;
  get currentSelection() {
    return this._currentSelection;
  }
  @Input()
  set currentSelection(value) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? this.emptyDataSelection
        : value;
  }

  setCurrentSelection(event:any):void {
    this.currentSelectionChange.emit(event.target.value);
  }
}

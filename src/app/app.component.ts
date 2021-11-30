import { Component } from '@angular/core';
import { GridApi } from 'ag-grid-community';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridApi: GridApi;
  displayBasic: boolean;

  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  defaultColDef = {
    editable: false,
    flex: 1,
    minWidth: 100,
    suppressCellSelection: false,
    filter: true,
  };

  rowData = [
    { make: 'Toyota1', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  showBasicDialog() {
    this.displayBasic = true;
  }

  closeBasicDialog() {
    this.displayBasic = false;
  }
}

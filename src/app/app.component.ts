import { ButtonModule } from 'primeng/button';
import { CellComponent } from './cell/cell.component';
import { FetchService } from './../fetch.service';
import { AgGridModule, AgGridAngular } from 'ag-grid-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { AgAbstractLabel } from 'ag-grid-community/dist/lib/widgets/agAbstractLabel';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  frameworkComponents:any;
  title = 'prng';
 items: MenuItem[];

 columnDefs = [
  {headerName: 'Make', field: 'make' ,sortable:true, filter:true ,checkboxSelection: true},

  {headerName: 'Model',
  field: 'model',
  cellRendererFramework: CellComponent,
  sortable:true, filter: 'agTextColumnFilter',

 },
  {headerName: 'Price', field: 'price',sortable:true,    filter: 'agNumberColumnFilter',

  // pass in additional parameters to the text filter
  filterParams: {
      buttons: ['apply', 'reset'],
      // debounceMs: 200
  },
  editable:true},



];


rowData:any;
constructor(private fs:FetchService){};
ngOnInit() {
  this.frameworkComponents = {
    btnCellRenderer: ButtonComponent
  };
  this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-plus'},
          {label: 'Open', icon: 'pi pi-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
      ]
  },
{
  label:'Users',
  items:[
    {label:'New'},
    {label:'Delete'},
    {label:'search',items:[{label:'filter',items:[{label:'print'}]},{label:'list'}]}
  ]
}];
  this.rowData = this.fs.getData() ;
}
select(){
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
  const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
  alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}

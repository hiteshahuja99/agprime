import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {AgGridModule} from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { CellComponent } from './cell/cell.component';
import { ButtonComponent } from './button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    AgGridModule.withComponents([AppComponent, CellComponent, ButtonComponent]),
    HttpClientModule



  ],
  providers: [],entryComponents:[CellComponent, ButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

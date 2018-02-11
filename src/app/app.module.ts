import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { DataTableDemo1 } from './demo1/data-table-demo1';
import { DataTableDemo2 } from './demo2/data-table-demo2';
import { DataTableDemo3 } from './demo3/data-table-demo3';
import { DataTableDemo1Remote } from './demo1/data-table-demo1-remote';
import { RemoteService } from 'app/demo1/data-table-demo1-remote-service';

@NgModule({
  imports: [ BrowserModule, CommonModule, FormsModule, DataTableModule, HttpModule ],
  declarations: [ AppComponent, DataTableDemo1, DataTableDemo2, DataTableDemo3, DataTableDemo1Remote ],
  bootstrap: [ AppComponent ],
  providers: [RemoteService]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedDataGridComponent } from './extracted-data-grid/extracted-data-grid.component';
import {Service} from './service/service';

@NgModule({
	declarations: [
		AppComponent,
		ExtractedDataGridComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		DxDataGridModule
	],
	providers: [Service],
	bootstrap: [AppComponent]
})
export class AppModule { }

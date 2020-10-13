import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedDataGridComponent } from './extracted-data-grid/extracted-data-grid.component';

@NgModule({
	declarations: [
		AppComponent,
		ExtractedDataGridComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DxDataGridModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import {Service} from "../service/service";

@Component({
	selector: 'extracted-data-grid',
	templateUrl: './extracted-data-grid.component.html',
	styleUrls: ['./extracted-data-grid.component.less']
})
export class ExtractedDataGridComponent implements OnInit {
	columns = [];
	dataSource: DataSource;
	constructor(services: Service) {
		this.dataSource = new DataSource({
			store: services.getData()
		});
	}

	ngOnInit(): void {
		this.columns = [{
			dataField: "title",
			caption: "Title"
		}, {
			dataField: "dateOfPublish",
			caption: "Date of Publish",
			dataType: "date"
		}, {
			dataField: "basedOn",
			caption: "Based on"
		}, {
			dataField: "type",
			caption: "Type"
		}, {
			dataField: "url",
			caption: "URL",
			cellTemplate: "URLLink"
		}];
	}

}

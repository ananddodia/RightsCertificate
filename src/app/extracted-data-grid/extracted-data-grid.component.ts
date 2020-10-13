import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

@Component({
	selector: 'extracted-data-grid',
	templateUrl: './extracted-data-grid.component.html',
	styleUrls: ['./extracted-data-grid.component.less']
})
export class ExtractedDataGridComponent implements OnInit {
	columns = [];
	dataSource: DataSource;
	constructor() { }

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
		this.dataSource = new DataSource({
            store: [{
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man",
				dateOfPublish: "12/25/2008",
				basedOn: "Comic",
				type: "Type 1",
				url: "https://www.google.com"
			}, {
				title: "Spider man 2",
				dateOfPublish: "01/02/2009",
				basedOn: "Comic",
				type: "Type 2",
				url: "https://www.google.com"
			}, {
				title: "Spider man 3",
				dateOfPublish: "12/22/2010",
				basedOn: "Comic",
				type: "Type 4",
				url: "https://www.google.com"
			}, {
				title: "Spider man: far from home",
				dateOfPublish: "11/10/2018",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}, {
				title: "Spider man: home coming",
				dateOfPublish: "11/11/2019",
				basedOn: "Comic",
				type: "Type 5",
				url: "https://www.google.com"
			}]
        });
	}

}

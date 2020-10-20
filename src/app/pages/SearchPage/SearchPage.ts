import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'search-page',
	templateUrl: './view/SearchPage.html',
	styleUrls: ['./style/SearchPage.less']
})
export class SearchPage implements OnInit {
	name = 'Hello world';
	constructor() {}

	ngOnInit(): void {}

}

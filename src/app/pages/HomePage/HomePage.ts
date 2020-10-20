import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-page',
	templateUrl: './view/HomePage.html',
	styleUrls: ['./style/HomePage.less']
})
export class HomePage implements OnInit {
	name = 'Hello world welcom to home page.';
	constructor() { }

	ngOnInit(): void { }

}

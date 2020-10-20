import { NgModule } from '@angular/core';
import { ComponentList } from '../Components';
import { SearchPage } from './SearchPage/SearchPage';
import { HomePage } from './HomePage/HomePage';
export const PageList = [SearchPage, HomePage];
    @NgModule({
        imports: [
            ComponentList
        ],
        declarations: [
            ...PageList
        ],
        exports: [
            ...PageList
        ]
    })
export class Pages {
    constructor() {
    } 
}
export * from './SearchPage/SearchPage';
export * from './HomePage/HomePage';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPage, HomePage } from './pages/pages.module';

const routes: Routes = [
        {
            path: '/',
            component: HomePage
        },
        {
            path: 'search',
            component: SearchPage
        }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
    
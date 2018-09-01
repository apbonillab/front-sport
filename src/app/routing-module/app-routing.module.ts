import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AthleticsComponent} from '../athletics/athletics.component';
import { SportsComponent } from '../sports/sports.component';


const routes: Routes = [
    
    {
        path: 'athletics',
        children: [
            {
                path: 'list',
                component: AthleticsComponent
            }
        ]
    },
    {
        path: 'sport',
        children: [
            {
                path: 'list',
                component: SportsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
    
}

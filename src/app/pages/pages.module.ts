import { NgModule } from "@angular/core";

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// Rutas hijas
import { PagesRoutes } from './pages.routes';
// material
import { MaterialModule } from './../material/material.module';
import { TablausuariosComponent } from './tablausuarios/tablausuarios.component';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        TablausuariosComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        PagesRoutes,
        MaterialModule
    ]
})
export class PagesModule { }
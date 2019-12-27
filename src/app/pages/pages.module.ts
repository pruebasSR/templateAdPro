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
// modals
import { DatosusuariomodalComponent } from './datosusuariomodal/datosusuariomodal.component';
import { ActualizarusuariomodalComponent } from './actualizarusuariomodal/actualizarusuariomodal.component';
// form
import { FormsModule } from '@angular/forms';
import { AgregaruserComponent } from './agregaruser/agregaruser.component';
// alert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        TablausuariosComponent,
        DatosusuariomodalComponent,
        ActualizarusuariomodalComponent,
        AgregaruserComponent
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        DatosusuariomodalComponent
    ],
    imports:[
        SharedModule,
        PagesRoutes,
        MaterialModule,
        FormsModule,
        SweetAlert2Module
    ],
    entryComponents: [
        DatosusuariomodalComponent,
        ActualizarusuariomodalComponent
     ]
})
export class PagesModule { }
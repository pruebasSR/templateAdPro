import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { TablausuariosComponent } from './tablausuarios/tablausuarios.component';
import { AgregaruserComponent } from './agregaruser/agregaruser.component';


const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'usuarios', component: TablausuariosComponent },
            { path: 'agregar', component: AgregaruserComponent },
            { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];
export const PagesRoutes = RouterModule.forChild( pagesRoutes );
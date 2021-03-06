import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// principales
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// rutas
import { AppRoutingModule } from './app-routing.module';
// modulos
import { PagesModule } from './pages/pages.module'; 
// angular material
import { MaterialModule } from './material/material.module';
import { PruebaComponent } from './components/prueba/prueba.component';
// import { DatosusuariomodalComponent } from './modals/datosusuariomodal/datosusuariomodal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PruebaComponent,
    // DatosusuariomodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

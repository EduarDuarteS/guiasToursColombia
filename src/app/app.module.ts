import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'

//Modulos
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// Rutas
import { APP_ROUTES } from "./app-routes";
import { ServiceModule } from './services/service.module';
import { UsuarioService } from './services/service.index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PagesModule,
    FormsModule,
    APP_ROUTES,
    ReactiveFormsModule
  ],
  providers: [ServiceModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

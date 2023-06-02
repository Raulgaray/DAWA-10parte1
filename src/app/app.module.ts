import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GamesComponent } from './components/cursos/cursos.component';
import { NewsComponent } from './components/news/news.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductosComponent,
    ListarProductosComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    NewsComponent,
    AssistanceComponent,
    ContactComponent,
    DonationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

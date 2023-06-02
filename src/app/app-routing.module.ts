import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componentes
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';  
import { GamesComponent } from './components/cursos/cursos.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { NewsComponent } from './components/news/news.component'; 
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/encuesta/encuesta.component';
// No Mine
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cursos', component: GamesComponent },
  { path: 'assistance', component: AssistanceComponent },
  { path: 'news', component: NewsComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'donation', component: DonationComponent },
  // No Mine
  { path: 'productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductosComponent },
  { path: 'editar-producto/:id', component: CrearProductosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

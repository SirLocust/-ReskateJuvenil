import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('src/app/home-page/home-page.module').then( (m) => m.HomePageModule),
  },
  {
    path: 'nosotros',
    loadChildren: () => import('src/app/nosotros/nosotros.module').then( (m) => m.NosotrosModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

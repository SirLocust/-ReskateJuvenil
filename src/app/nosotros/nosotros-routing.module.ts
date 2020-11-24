import { BodyNosotrosComponent } from './components/body-nosotros/body-nosotros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BodyNosotrosComponent,
  }
  // { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }

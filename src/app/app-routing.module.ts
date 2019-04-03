import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: '', redirectTo: '/popular', pathMatch: 'full' },
  { path: 'popular', component: PopularComponent },
  { path: 'top', component: TopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

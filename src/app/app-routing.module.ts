import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EntryPageComponent} from './entry-page/entry-page.component';


const routes: Routes = [
  { path: 'landing',
    component: EntryPageComponent,
    data: {animationState: 'One'}
  },
  { path: 'home',
   component: HomeComponent, 
   data: {animationState: 'Two'}},
  { path: '',
    component: EntryPageComponent,
    data: {animationState: 'One'}
  },
  { path: '**',
    component: EntryPageComponent,
    data: {animationState: 'One'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EntryPageComponent} from './entry-page/entry-page.component';


const routes: Routes = [
  { path: 'landing',
    component: EntryPageComponent,
    data: { state: 'entry'}
    // data: {animationState: 'From'}
  },
  { path: 'home',
   component: HomeComponent,
   data: { state: 'home'}
  },
  //  data: {animationState: 'To'}}
  { path: '',
    component: EntryPageComponent,
    data: { state: 'entry'}
    // data: {animationState: 'From'}
  },
  { path: '**',
    component: EntryPageComponent,
    data: { state: 'entry'}
    // data: {animationState: 'From'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

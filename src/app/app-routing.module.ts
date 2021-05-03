import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EntryPageComponent} from './entry-page/entry-page.component';


const routes: Routes = [
  { path: 'landing', component: EntryPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: EntryPageComponent },
  { path: '**', component: EntryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

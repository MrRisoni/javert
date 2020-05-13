import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HostComponent} from './host/host.component';
import {AppComponent} from './app.component';

const routes: Routes = [
      {path: '', component: AppComponent},
    {path: 'host', component: HostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

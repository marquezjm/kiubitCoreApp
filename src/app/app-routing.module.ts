import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreAppComponent } from './core-app/core-app.component';

const routes: Routes = [
  {path:'',component:CoreAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

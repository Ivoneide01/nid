import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatzappComponent } from './components/whatzapp/whatzapp.component';

const routes: Routes = [
  {
    path:'', component: WhatzappComponent // tem que adicionar importação
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

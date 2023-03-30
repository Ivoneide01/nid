import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { WhatzappComponent } from './components/whatzapp/whatzapp.component';

const routes: Routes = [
  {
    path:'', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'whatzapp', component: WhatzappComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'whatzapp', component: WhatzappComponent }  ] // tem que adicionar importação
        
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

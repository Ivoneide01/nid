import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { WhatzappComponent } from './components/whatzapp/whatzapp.component';
import { HomeComponent } from './components/home/home.component';

//Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatRadioModule } from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { ContatoComponent } from './components/contato/contato.component';
import { PrejetosComponent } from './components/prejetos/prejetos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { RedessociaisComponent } from './components/redessociais/redessociais.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WhatzappComponent,
    HomeComponent,
    ContatoComponent,
    PrejetosComponent,
    SobreComponent,
    RedessociaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

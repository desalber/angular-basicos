import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';

import { HeroresModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroresModule,
    ContadoresModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

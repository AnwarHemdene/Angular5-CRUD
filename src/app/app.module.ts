import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {environment} from './../environments/environment';
import { SujetService} from '../app/sujets/shared/sujet.service';

import {SujetsComponent} from './sujets/sujets.component';
import {SujetComponent} from './sujets/sujet/sujet.component' ;
import {SujetListComponent} from './sujets/sujet-list/sujet-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SujetsComponent,
    SujetComponent,
    SujetListComponent

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [SujetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatExpansionModule, MatTabsModule, MatSidenavModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [
  ],

  entryComponents:[
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

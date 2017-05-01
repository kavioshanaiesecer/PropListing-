import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FirebaseService} from './services/firebase.service';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDH_2Mbk7W6AofMWoL4BmNYQCh4c8aKQao',
  authDomain: 'proplistings-260f6.firebaseapp.com',
  databaseURL: 'https://proplistings-260f6.firebaseio.com',
  storageBucket: 'proplistings-260f6.appspot.com',
  messagingSenderId: '961267916352'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'listings', component:ListingsComponent},
  {path: 'add-listing', component:AddListingComponent},
  {path: 'listing/:id', component:ListingComponent},
  {path: 'edit-listing/:id', component:EditListingComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

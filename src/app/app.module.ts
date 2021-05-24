import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders} from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpecificationComponent } from './components/specification/specification.component';
import { ESectionComponent } from './components/esection/esection.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    //Component that display the information about a single video
    SpecificationComponent,
    //Component that displpay a grid of videos realted
    ESectionComponent,
    //Camponent that display the home page
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    routing,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
import { LoginComponent } from './login/login.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceSuccessComponent } from './service-success/service-success.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    ServiceSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    legacyLibrary.add()
  }
}

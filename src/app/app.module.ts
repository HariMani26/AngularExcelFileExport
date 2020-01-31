import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{XlsServiceService} from './xls-service.service'
@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    XlsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

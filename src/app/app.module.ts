import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { SpeechRecognizationService } from './services/speech-recognization.service';
import { FraudDetectionServiceService } from './services/fraud-detection-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SpeechRecognizationService,
    FraudDetectionServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

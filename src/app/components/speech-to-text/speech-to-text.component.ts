import { Component, OnInit } from '@angular/core';
import { FraudPredictResponse } from 'src/app/models/predict-response';
import { FraudDetectionServiceService } from 'src/app/services/fraud-detection-service.service';
import { SpeechRecognizationService } from 'src/app/services/speech-recognization.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css']
})
export class SpeechToTextComponent implements OnInit {
  public isUserSpeaking: boolean = false;
  public fraudDetectionResponse: FraudPredictResponse | undefined
  constructor(
    public speechRecognizationService: SpeechRecognizationService,
    private fraudDetectionService: FraudDetectionServiceService
  ) { }

  ngOnInit(): void {
    this.initVoiceInput()
  }

  /**
   * @description Function to stop recording.
   */
  stopRecording() {
    this.speechRecognizationService.stop();
    this.isUserSpeaking = false;
  }

  /**
   * @description Function for initializing voice input.
   */
  initVoiceInput() {
    this.speechRecognizationService.init().subscribe((message) => {
      // User has stopped recording
      console.log("Final data for calling api=> " + message)
      this.fraudDetectionService.predictFraudMessage(message).subscribe((res)=>{
        console.log(res)
        this.fraudDetectionResponse = res
      },
      error=>{
        console.log("Something went wrong!! "+error)
      })
    });
  }

  /**
   * @description Function to start voice input.
   */
  startRecording() {
    this.fraudDetectionResponse = undefined
    this.isUserSpeaking = true;
    this.speechRecognizationService.start();
  }
}

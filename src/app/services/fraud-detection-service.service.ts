import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FraudPredictResponse } from '../models/predict-response';

@Injectable({
  providedIn: 'root'
})
export class FraudDetectionServiceService {

  public baseUrl:string = ""

  constructor(
    private httpClient:HttpClient
  ) { 
    this.baseUrl = `${environment.baseUrl}/fraud-detection/api/v1`
  }

  predictFraudMessage(message: string): Observable<FraudPredictResponse> {
    console.log("Called predict endpoint...")
    var request = {"speechText": message}
    return this.httpClient.post<FraudPredictResponse>(`${this.baseUrl}/predict`, request);
  }
}

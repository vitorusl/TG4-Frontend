import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { DollarModel, ResponseDollarApiModel } from './dollar.model';

@Injectable({
  providedIn: 'root'
})

export class DollarService {

  constructor(private _httpClient:HttpClient) { }

  public getDollarPrice(){
    return this._httpClient.get<ResponseDollarApiModel>(`${API_PATH}`);
  }
}

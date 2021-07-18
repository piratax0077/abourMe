import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private _http: HttpClient) { }

  sendMessage(body: any):Observable<any> {
    return this._http.post("https://app-about-me-dev.herokuapp.com/formulario", body);
    }
}

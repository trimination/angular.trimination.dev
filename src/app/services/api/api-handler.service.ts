import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) {
  }

  _get(endpoint: string): Observable<any> {
    return this.http.get(environment.apiUrl + endpoint);
  }

}

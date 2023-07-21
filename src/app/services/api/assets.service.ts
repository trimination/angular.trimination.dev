import { Injectable } from '@angular/core';
import {ApiHandlerService} from "./api-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private api: ApiHandlerService) { }

  getTechStackImages() {
    return this.api._get('assets/tech');
  }
}

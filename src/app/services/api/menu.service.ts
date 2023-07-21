import { Injectable } from '@angular/core';
import {ApiHandlerService} from "./api-handler.service";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: ApiHandlerService) {
  }

  getMenu() {
    return this.api._get('menu');
  }
}

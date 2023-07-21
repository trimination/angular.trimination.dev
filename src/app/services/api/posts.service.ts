import { Injectable } from '@angular/core';
import {ApiHandlerService} from "./api-handler.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private api: ApiHandlerService) { }

  getPost(slug: string) {
    return this.api._get(slug);
  }
}

import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {PostsService} from "../services/api/posts.service";

export const homeResolver: ResolveFn<boolean> = (route, state) => {
  return inject(PostsService).getPost('home');
};

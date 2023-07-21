import { ResolveFn } from '@angular/router';
import {PostsService} from "../services/api/posts.service";
import {inject} from "@angular/core";

export const pageResolver: ResolveFn<boolean> = (route, state) => {
  return inject(PostsService).getPost(route.paramMap.get('slug')!);
};

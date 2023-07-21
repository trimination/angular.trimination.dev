import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {AssetsService} from "../services/api/assets.service";

export const techStackImageResolver: ResolveFn<boolean> = (route, state) => {
  return inject(AssetsService).getTechStackImages();
};

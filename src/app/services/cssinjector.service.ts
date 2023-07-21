import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CSSInjectorService {

  constructor() {
  }

  _inject(styleName: string, delay = 0) {
    setTimeout(()=>{
      const style = document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = `assets/${styleName}`;
      document.head.appendChild(style);
    }, delay);
  }
}

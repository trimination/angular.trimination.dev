import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  stateSubject: Subject<boolean>;
  state;

  constructor() {
    let ls = localStorage.getItem('dark-mode') ?? 'false';
    this.state = JSON.parse(ls);
    this.stateSubject = new Subject<boolean>();
    this.toggle(this.state);
  }

  getStateSubject(): Subject<boolean> {
    return this.stateSubject;
  }

  toggle(state: boolean) {
    this.state = state;
    localStorage.setItem('dark-mode', this.state.toString());
    this.stateSubject.next(state);
    document.body.classList.toggle('dark', state);
  }

  getState(): boolean {
    return this.state;
  }
}

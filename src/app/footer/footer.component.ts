import { Component } from '@angular/core';
import {IMenuUrl} from "../interfaces/imenu-url";
import {MenuService} from "../services/api/menu.service";
import {DarkModeService} from "../services/dark-mode.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  dmm;
  darkMode = false;

  constructor(protected darkModeService: DarkModeService) {
    this.dmm = darkModeService.getStateSubject().subscribe((value: boolean)=>{
      this.darkMode = value;
    });
  }
  ngOnInit() {
    this.darkMode = this.darkModeService.getState();
  }
}

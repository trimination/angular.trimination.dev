import {Component} from '@angular/core';
import {DarkModeService} from "./services/dark-mode.service";
import {CSSInjectorService} from "./services/cssinjector.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dmm;
  darkMode = false;

  constructor(
    protected darkModeService: DarkModeService,
    private cssInjector: CSSInjectorService
    ) {
    this.dmm = darkModeService.getStateSubject().subscribe((value: boolean) => {
      this.darkMode = value;
    });
  }

  ngAfterViewInit() {
    this.cssInjector._inject('post-load.css', 300);
  }
  ngOnDestroy() {
    this.dmm.unsubscribe();
  }

}

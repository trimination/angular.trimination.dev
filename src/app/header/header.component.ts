import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuService} from "../services/api/menu.service";
import {environment} from "../../environments/environment";
import {take} from "rxjs";
import {IMenuUrl} from "../interfaces/imenu-url";
import {DarkModeService} from "../services/dark-mode.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  protected readonly environment = environment;
  dmm;
  darkMode = false;
  menuUrls: IMenuUrl[] = [];
  menuOpen = false;

  constructor(private menuService: MenuService,
              protected darkModeService: DarkModeService
  ) {
    this.dmm = darkModeService.getStateSubject().subscribe((value: boolean)=>{
      this.darkMode = value;
    });
  }
  ngOnInit() {
    this.fetchNavMenu();
    this.darkMode = this.darkModeService.getState();
    window.addEventListener('resize', ()=>{
      if(window.innerWidth >= 850 && this.menuOpen){
        this.toggleMenu();
      }
    });
  }

  fetchNavMenu() {
    this.menuService.getMenu().pipe(take(1)).subscribe({
      next: (data) => {
        this.menuUrls = data;
      },
      error: (err) => {}
    });
  }
  ngOnDestroy() {
    this.dmm.unsubscribe();
  }

  toggleDarkMode() {
    this.darkModeService.toggle(!this.darkMode);
  }

  toggleMenu() {
    if(this.navMenu){
      this.navMenu.nativeElement.classList.toggle('open');
      this.menuOpen = !this.menuOpen;
    }
  }
}

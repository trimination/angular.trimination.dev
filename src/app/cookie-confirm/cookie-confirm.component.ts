import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-confirm',
  templateUrl: './cookie-confirm.component.html',
  styleUrls: ['./cookie-confirm.component.scss']
})
export class CookieConfirmComponent {
  cookieConfirm = false;

  ngOnInit() {
    let ca = localStorage.getItem("cookies-accepted");
    this.cookieConfirm = ca === null ? false : JSON.parse(ca);
  }

  acknowledge() {
    this.cookieConfirm = true;
    localStorage.setItem("cookies-accepted", "true");
  }

}

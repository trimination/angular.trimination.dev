import { Component } from '@angular/core';
import {IPost} from "../interfaces/ipost";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {DarkModeService} from "../services/dark-mode.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly environment = environment;
  stackImageDirs: string[] = [];
  stackImageData: any = {};
  currentPage!: IPost;
  dmm;
  darkMode = false;
  subdomainDescribe = "This particular area of trimination.dev is created with Angular 16 to demonstrate " +
    "my understanding of the framework. Ordinarily I would use nodeJS for the back-end but this service is using " +
    "a PHP backend so I don't have to indefinitely run an express server on my VPS.";

  constructor(
    private route: ActivatedRoute,
    protected darkModeService: DarkModeService
    ) {
    this.dmm = darkModeService.getStateSubject().subscribe((value: boolean)=>{
      this.darkMode = value;
    });
  }

  ngOnInit() {
    this.route.data.subscribe({
      next: ({data, images}) => {
        if(!data.status) {
          this.currentPage = data;
          this.currentPage.content = this.currentPage.content.replace('{{subdomain-describe}}', this.subdomainDescribe);
        }
        this.stackImageDirs = Object.keys(images);
        this.stackImageData = images;
      },
      error: err => {
      }
    });
  }

  ngOnDestroy() {
    this.dmm.unsubscribe();
  }
}

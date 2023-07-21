import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../services/api/posts.service";
import {IPost} from "../interfaces/ipost";
import {take} from "rxjs";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  currentPage!: IPost;
  constructor(private route: ActivatedRoute, private post: PostsService) {
  }

  ngOnInit() {
    this.route.data.subscribe({
      next: ({data}) => {
        if(!data.status) {
          this.currentPage = data;
        }
      },
      error: err => {
      }
    });
  }
}

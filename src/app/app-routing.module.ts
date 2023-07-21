import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageComponent} from "./page/page.component";
import {pageResolver} from "./resolvers/page.resolver";
import {homeResolver} from "./resolvers/home.resolver";
import {techStackImageResolver} from "./resolvers/assets.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {data: homeResolver, images: techStackImageResolver}},
  {path: ':slug', component: PageComponent, resolve: {data: pageResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

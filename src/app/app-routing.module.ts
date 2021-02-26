import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Title for Home Component',
      descrption: 'Description of Home Component',
      ogTitle: 'Description of Home Component for social media',
    },
  },
  {
    path: 'first',
    component: FirstComponent,
    data: {
      title: 'Title for First Component',
      descrption: 'Description of First Component',
      robots: 'noindex, nofollow',
      ogTitle: 'Description of First Component for social media',
    },
  },
  {
    path: 'second',
    children: [
      {
        path: '',
        component: SecondComponent,
        pathMatch: 'full',
        data: {
          title: 'Title for Second Component',
          descrption: 'Description of Second Component',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

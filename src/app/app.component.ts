import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content: 'TEST TEST TEST',
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);

        rt.data.subscribe(
          (data: {
            title: string;
            descrption: any;
            robots: any;
            ogUrl: any;
            ogTitle: any;
            ogDescription: any;
            ogImage: any;
          }) => {
            console.log(data);
            this.titleService.setTitle(data.title);

            if (data.descrption) {
              this.metaService.updateTag({
                name: 'description',
                content: data.descrption,
              });
            } else {
              this.metaService.removeTag("name='description'");
            }

            if (data.robots) {
              this.metaService.updateTag({
                name: 'robots',
                content: data.robots,
              });
            } else {
              this.metaService.updateTag({
                name: 'robots',
                content: 'follow,index',
              });
            }

            if (data.ogUrl) {
              this.metaService.updateTag({
                property: 'og:url',
                content: data.ogUrl,
              });
            } else {
              this.metaService.updateTag({
                property: 'og:url',
                content: this.router.url,
              });
            }

            if (data.ogTitle) {
              this.metaService.updateTag({
                property: 'og:title',
                content: data.ogTitle,
              });
            } else {
              this.metaService.removeTag("property='og:title'");
            }

            if (data.ogDescription) {
              this.metaService.updateTag({
                property: 'og:description',
                content: 'TEST DESCRIPTION',
              });
            } else {
              this.metaService.removeTag("property='og:description'");
            }

            if (data.ogImage) {
              this.metaService.updateTag({
                property: 'og:image',
                content: data.ogImage,
              });
            } else {
              //this.metaService.removeTag("property='og:image'");
            }
          }
        );
        this.metaService.updateTag({
          name: 'description',
          content: 'TEST TEST TEST',
        });
        this.metaService.addTag({
          property: 'og:image',
          content: 'https://picsum.photos/id/237/200/300',
        });
      });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}

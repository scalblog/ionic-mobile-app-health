import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { NewsApiGlobal } from '../../models/newsapi-global.model';
import { NewsApiService } from '../../services/newsapi.service';


@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html'
})
export class NewsfeedPage {

  news : NewsApiGlobal = new NewsApiGlobal();

  constructor(public navCtrl: NavController, private newsApiService : NewsApiService) {
    this.newsApiService.getArticles()
    .then(newsFetched => {this.news = newsFetched;
    console.log(this.news);
    });
  }

  private showHome() {
  	this.navCtrl.push(HomePage);
  }

}

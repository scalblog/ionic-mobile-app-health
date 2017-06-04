import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { PlanningPage } from '../planning/planning';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private showPlanning() {
  	this.navCtrl.push(PlanningPage);
  }

  private showApropos() {
  	this.navCtrl.push(AboutPage);
  }
}

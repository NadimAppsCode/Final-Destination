import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-qabr-questions',
  templateUrl: 'qabr-questions.html',
})
export class QabrQuestionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // slides = [
  //   {
  //     image: "../assets/imgs/Q1.png",
      
  //   },
  //   {
  //      image: "../assets/imgs/Q2.png",
  //   },
  // ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad QabrQuestionsPage');
  }

}

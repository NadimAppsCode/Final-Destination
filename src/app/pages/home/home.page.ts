import { Component, OnInit } from '@angular/core';
import SwiperOptions from "../../../../node_modules/swiper/swiper"


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  bannerConfig: SwiperOptions;
  banners: any[] = [];

  constructor() {

   }

  getSahadahText() {
    console.log("Getting Shahadah data")
    this.goToOtherPage()
  }
  getNamazEJanazahText() {
    console.log("Getting Janazah data")
  }
  getDuaList() {
    console.log("Getting dua data")
  }
  getHadithList() {
    console.log("Getting Hadith list")
  }
  getWashingSteps() {
    console.log("Getting Washing Steps")
  }
  getTasbeehCounter() {
    console.log("Getting Tasbeeh Counter")
  }
  getQabarEAzaabText() {
    console.log("Getting Azab data")
  }
  getHoorData() {
    console.log("Getting Hoor list")
  }
  getData() {
    console.log("Getting data")
  }

  goToOtherPage()
  {
     console.log("Navigating to another page.../ShahadatPage")
  }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/imgs/hoor.jpg'},
      {banner: 'assets/imgs/Q1.png'},
      {banner: 'assets/imgs/Q3.png'},
      {banner: 'assets/imgs/zabaan.png'},
    ];
  }

}

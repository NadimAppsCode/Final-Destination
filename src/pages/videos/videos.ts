import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

  playVideo()
  {
    this.youtube.openVideo('I7x8hmGbJmc');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private youtube: YoutubeVideoPlayer) {
   // this.youtube.openVideo('I7x8hmGbJmc');
    
  }
  

}

import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  language!: string;
  videoArray!: any[];
  mainObject = [
    { "id": "1", "header": "Tongue", "content": "Zabaan", "imgSrc": "https://img.youtube.com/vi/vFmNWa-51SI/maxresdefault.jpg", "videoId": "vFmNWa-51SI", "Lang": "U" },
    { "id": "2", "header": "Story of Shaddaad who built Paradise", "content": "This Duniya cannot become Paradise", "imgSrc": "https://img.youtube.com/vi/XwXhWzEDctM/maxresdefault.jpg", "videoId": "XwXhWzEDctM", "Lang": "U" },
    { "id": "3", "header": "Quran-Verse", "content": "Verily after hardship there comes ease", "imgSrc": "https://img.youtube.com/vi/60edTYTf4iw/maxresdefault.jpg", "videoId": "60edTYTf4iw", "Lang": "E" },
    { "id": "4", "header": "Hadidth", "content": "2 EASY HABITS LEAD TO JANNAH, VERY FEW WILL DO THEM", "imgSrc": "https://img.youtube.com/vi/MkYcEMCDRoo/maxresdefault.jpg", "videoId": "MkYcEMCDRoo", "Lang": "E" },
    { "id": "5", "header": "", "content": "Gifted with Cancer - Ali Banat", "imgSrc": "https://img.youtube.com/vi/dzL6BLPAFBo/maxresdefault.jpg", "videoId": "dzL6BLPAFBo", "Lang": "E" }
  ]
  constructor(private youtube: YoutubeVideoPlayer) {
    this.language = "U";
    this.selectLanguage();
  }

  ngOnInit() {
  }

  selectLanguage() {
    console.log('Lang changed:', this.language);
    if (this.language == "E") {
      const lang_filter = this.mainObject.filter(language => language.Lang == "E");
      this.videoArray = JSON.parse(JSON.stringify(lang_filter));
    }
    else {
      const lang_filter = this.mainObject.filter(language => language.Lang == "U");
      this.videoArray = JSON.parse(JSON.stringify(lang_filter));
    }
  }

  playVideo(videoId: any) {
    this.youtube.openVideo(videoId);
  }

}

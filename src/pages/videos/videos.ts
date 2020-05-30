import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

 language: any
 lang_filter;
 jsonResult;
 parsedRes;
 mainObject  = [
   {"id":"1","header":"Tongue","content":"Zabaan","imgSrc":"https://img.youtube.com/vi/vFmNWa-51SI/maxresdefault.jpg","videoId":"vFmNWa-51SI","Lang":"U"},
   {"id":"2","header":"Story of Shaddaad who built Paradise","content":"This Duniya cannot become Paradise","imgSrc":"https://img.youtube.com/vi/XwXhWzEDctM/maxresdefault.jpg","videoId":"XwXhWzEDctM","Lang":"U"},
   {"id":"3","header":"Quran-Verse","content":"Verily after hardship there comes ease","imgSrc":"https://img.youtube.com/vi/60edTYTf4iw/maxresdefault.jpg","videoId":"60edTYTf4iw","Lang":"E"},
   {"id":"4","header":"Hadidth","content":"2 EASY HABITS LEAD TO JANNAH, VERY FEW WILL DO THEM","imgSrc":"https://img.youtube.com/vi/MkYcEMCDRoo/maxresdefault.jpg","videoId":"MkYcEMCDRoo","Lang":"E"},
   {"id":"5","header":"","content":"Gifted with Cancer - Ali Banat","imgSrc":"https://img.youtube.com/vi/dzL6BLPAFBo/maxresdefault.jpg","videoId":"dzL6BLPAFBo","Lang":"E"}
   
  ]

  videoArray:any[]

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
      this.lang_filter = this.mainObject.filter( language => language.Lang =="U")
      this.jsonResult = JSON.stringify(this.lang_filter)
      this.parsedRes = JSON.parse(this.jsonResult)
      this.videoArray = this.parsedRes
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

  onChange() {
    console.log('Lang changed:', this.language); 
    if(this.language == "E")
    {
      this.lang_filter = this.mainObject.filter( language => language.Lang =="E")
      this.jsonResult = JSON.stringify(this.lang_filter)
      this.parsedRes = JSON.parse(this.jsonResult)
      this.videoArray = this.parsedRes
    
    } else {
      this.lang_filter = this.mainObject.filter( language => language.Lang =="U")
      this.jsonResult = JSON.stringify(this.lang_filter)
      this.parsedRes = JSON.parse(this.jsonResult)
      this.videoArray = this.parsedRes
      
    }
       
  }

  doesFileExist(urlToFile)
 {
    this.http.get(urlToFile).subscribe(data=>{
      //process the json data
      console.log(data)
    })

      
  }

  playVideo(videoId)
  {
    this.youtube.openVideo(videoId);

   /*get the thumbnail-image of a Utubevideo: https://img.youtube.com/vi/I7x8hmGbJmc/maxresdefault.jpg || hqdefault.jpg || default
   https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/default.jpg -   default
   https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg - medium 
   https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg - high
   https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/sddefault.jpg - standard
   And for the maximum resolution.../assets/imgs/zabaan.png
   https://i1.ytimg.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg
    {"id":"1","header":"Do not be arrogant(7:13)","content":"This is one of the 99 Commands of ALLAH(SWT).Please watch the bayaan:","imgSrc":"https://img.youtube.com/vi/I7x8hmGbJmc/maxresdefault.jpg","videoId":"I7x8hmGbJmc"},
   {"id":"2","header":"Forgive others for their mistakes(7:199)","content":"This is one of the 99 Commands of ALLAH(SWT).Please watch the bayaan:","imgSrc":"https://img.youtube.com/vi/L9gm1hJpMN4/maxresdefault.jpg","videoId":"L9gm1hJpMN4"},
   {"id":"3","header":"Spend wealth in charity(57:7)","content":"This is one of the 99 Commands of ALLAH(SWT).Please watch the bayaan:","imgSrc":"https://img.youtube.com/vi/Evf9437zxxQ/maxresdefault.jpg","videoId":"Evf9437zxxQ"},
   {"id":"4","header":"Angels were Heard by NASA","content":"Placeholder for now...","imgSrc":"https://img.youtube.com/vi/kPWyrVbT98Y/maxresdefault.jpg","videoId":"kPWyrVbT98Y"},
 */
    
  }

}

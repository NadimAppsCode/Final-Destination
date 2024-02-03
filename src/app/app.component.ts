import { Component } from '@angular/core';
import { IonUtilitiesService, CommonService } from './services';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tabs', icon: 'home' },
    { title: '99 Names of ALLAH(SWT)', url: '/commands/names', icon: 'list' },
    { title: '99 Command of ALLAH(SWT)', url: '/commands/commands', icon: 'list' },
    { title: 'Qabr(Questions)', url: '/qabr-questions', icon: 'list' },
    { title: 'Qabr(Azaab)', url: '/list/azaab', icon: 'list' },
    { title: 'Rooh(Soul)', url: '/list/rooh', icon: 'heart' },
    { title: 'Tauba', url: '/list/tauba', icon: 'list' },
    { title: 'Videos', url: '/videos', icon: 'videocam' },
    { title: 'Jannah(Hoor)', url: '/list/jannah', icon: 'list' },
    { title: 'Tasbeeh', url: '/tasbeeh', icon: 'list' }

  ];
  constructor(private _ion: IonUtilitiesService, public platform: Platform, private common: CommonService) {
    if (this.platform.is('capacitor')) { this.OneSignalInit() }
  }

  OneSignalInit() {
    this._ion.oneSignal.setAppId("ea0ca4e5-9ac9-454c-a8b9-1441c11cf06d");
    this._ion.oneSignal.setLocationShared(false);

    this._ion.oneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      this.common.newNotification.push(
        {
          title: jsonData.notification.title as any,
          body: jsonData.notification.body
        }
      )
      this._ion.presentLoading().then(() => {
        setTimeout(() => {
          this.common.navigate("/notifications");
          this._ion.dismissLoader();
        }, 1000);
      })
    });

    this._ion.oneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log("User accepted notifications: " + accepted);
    });
  }
}

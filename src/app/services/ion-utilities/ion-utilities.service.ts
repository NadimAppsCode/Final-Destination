import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonUtilitiesService {

  public oneSignal = OneSignal;
  private loader: any;

  constructor(public loadingController: LoadingController) { }

  async presentLoading() {
    this.loader = await this.loadingController.create({});
    await this.loader.present();
  }

  dismissLoader() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
  }
}

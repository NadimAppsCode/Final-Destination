import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shahadat',
  templateUrl: './shahadat.page.html',
  styleUrls: ['./shahadat.page.scss'],
})
export class ShahadatPage implements OnInit {

  shahadah_Arabic = "اَشْهَدُ اَنْ لَّآ اِلٰهَ اِلَّا اللهُ وَحْدَہٗ لَاشَرِيْكَ لَہٗ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهٗ وَرَسُولُہٗ"
//   shahadah_details = 'The second kalima is called the shahadat or ‘bearing witness to faith’. This encompasses the central doctrine of Tawheed in Islam. The Tawheed is the belief in the unification or oneness of God. It holds that Allah is One (Al-Ahad) and Single (Al-Wahid). The Shahada is mentioned repeatedly in the Quran and Hadith and is the basic theme of Islam. When a Muslim recites the second Kalima they proclaim:
//
//     That Allah is the one and only God, and that Muhammad is his servant and messenger.
//     That they personally accept this as true.
//     That they will obey all the commitments of Islam in their life.'


  shahadah_details = [
  "The second kalima is called the Shahadat or ‘bearing witness to faith’. This encompasses the central doctrine of Tawheed in Islam. The Tawheed is the belief in the unification or oneness of God. It holds that Allah is One (Al-Ahad) and Single (Al-Wahid). The Shahada is mentioned repeatedly in the Quran and Hadith and is the basic theme of Islam. When a Muslim recites the second Kalima they proclaim:\n",
  "That Allah is the one and only God, and that Muhammad(ﷺ) is his servant and messenger\n",
  "That they personally accept this as true\n",
  "That they will obey all the commitments of Islam in their life."
].join(" ");

  constructor() { }

  ngOnInit() {
  }

}

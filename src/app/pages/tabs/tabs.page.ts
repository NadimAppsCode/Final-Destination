import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public actionSheetButtons = [
    {
      text: 'Log out',
      role: 'destructive',
      handler: () => {
        console.log('Destructive clicked');
        console.log('Logged out');
      }
    },
    {
      text: 'Settings',
      handler: () => {
        console.log('Archive clicked');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

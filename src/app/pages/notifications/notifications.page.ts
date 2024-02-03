import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(public common: CommonService) { }

  ngOnInit() {
  }

}

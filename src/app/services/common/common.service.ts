import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public newNotification: [{ title: String, body: String }] = [
    { title: "Placeholder notification", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];

  constructor(private _router: Router) { }

  navigate(route: string, root?: boolean) {
    this._router.navigate([route], { replaceUrl: root });
  }
}

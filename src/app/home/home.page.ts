import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://randomuser.me/api/?results=100').pipe(map((res:any) => res['results']));
  }

}

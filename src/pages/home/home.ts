
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import {repoSearchController} from 'app.js';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  name: any;
  
  constructor(public navCtrl: NavController, private http: Http) {

  }

  onClickMe() {
    
    this.http.get('https://api.github.com/users/' + this.name + "/repos").subscribe(e => {
      
      console.log(e.text());
    //  return e;
    })
    // fetch('https://api.github.com/users/' + this.name).then(r => {
    //   console.log(r.data);
    // })
  }

}

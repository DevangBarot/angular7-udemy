import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    //getIdToken()
  }

  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDVyx8PJaklpWT3K6rGB02Wm__FgzTqLPk',
        authDomain: 'ng-recipe-book-36335.firebaseapp.com'
    });
  }
}

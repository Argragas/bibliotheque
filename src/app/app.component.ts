import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
        apiKey: 'AIzaSyBeF5xV8U9NuIOyqEkMNk0GrzdzxeDSZq4',
        authDomain: 'angularopenclassroom-14a51.firebaseapp.com',
        databaseURL: 'https://angularopenclassroom-14a51.firebaseio.com',
        projectId: 'angularopenclassroom-14a51',
        storageBucket: 'angularopenclassroom-14a51.appspot.com',
        messagingSenderId: '83496881656',
        appId: '1:83496881656:web:90019abb9ade2994'
      };
    firebase.initializeApp(config);
  }
}

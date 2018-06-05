import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon App';
  welcomeMsg = 'Bonjour à tous';
  user = {
    id: 0,
    name: 'Michel François',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };
  test(e: MouseEvent) {
    console.log('user : ' + JSON.stringify(this.user));
    console.log('user : ' + this.user.name);
    console.log(e);
  }
  changeText(text) {
    // console.log('[' + e.target.value + ']');
    // console.log('[' + text + ']');
    this.user.name = text;
  }

  logInputValue(v) {
    console.log('La valeur saisie est : ' + v);
  }
}

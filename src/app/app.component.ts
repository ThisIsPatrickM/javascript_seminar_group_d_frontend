import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'javascript-seminar-group-d-frontend';
  showMockVideo = false;
  showGames = false;
  showSettings = true;

  toggleMockVideo(){
    this.showMockVideo = !this.showMockVideo;
  };

  toggleGames(){
    this.showGames = !this.showGames;
  };

  toggleSettings(){
    this.showSettings = !this.showSettings;
  };
}

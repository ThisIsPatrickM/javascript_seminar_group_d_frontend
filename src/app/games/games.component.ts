import { Component, OnInit, Input } from '@angular/core';
import { isDevMode } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  debugMessage: String = "";
  devMode = isDevMode();
  selectedGame : String = "quiz";
  gameJoined : boolean = false
  @Input() sessionId: String;
  @Input() username: String;

  ngOnInit(): void {
  }
  

  public onJoinGameButton() {
    this.debugMessage = "Joining Game as " + this.username + " in Session " + this.sessionId + this.selectedGame;
    this.gameJoined = true;
    // Disconnect after 2 seconds
    setTimeout( () => {
      this.onDisconnect();
      this.debugMessage = "Disconnected after Timeout"
    }, 2000);

  }

  isSelected(game){
    return game == this.selectedGame;
  }

  onDisconnect() {
    this.gameJoined = false;
    this.debugMessage = "Disconnected";
  }


}

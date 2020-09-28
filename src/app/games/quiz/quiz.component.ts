import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private gamesService : GamesService) { }

  ngOnInit(): void {
  }

}

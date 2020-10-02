import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Quiz } from "../model/quiz";
import { Answer } from "../model/answer";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Output() finished = new EventEmitter<boolean>();

  // Mock quiz
  quiz: Quiz = {
    question: "What is your favourite letter?",
    answers: [
      {
        text: "Answer A"
      },
      {
        text: "Answer B"
      },
      {
        text: "None of the above"
      },
      {
        text: "All of the above"
      }
    ]
  }
  selectedAnswers;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  onSend(): void {
    this.quiz.question = undefined;
    this.quiz.answers = [];
    console.log("Sending " + this.selectedAnswers)
    this.finished.emit(true);
  }

}

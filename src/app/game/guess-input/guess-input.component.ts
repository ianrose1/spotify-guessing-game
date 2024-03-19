import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.css']
})
export class GuessInputComponent {
  @Input() options: string[] = [];
  @Output() guessMade = new EventEmitter<string>(); 

  makeGuess(option: string) {
    this.guessMade.emit(option);
  }
}
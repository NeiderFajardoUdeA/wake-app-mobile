import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent {
  @Input() letter: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  hasLetter: boolean = false;

  constructor() { }

  ngOnInit() {
    this.hasLetter = this.letter !== '';
  }
}
import { Component, input } from '@angular/core';
import { DisplayVerse } from '../../models/chalisa.model';

@Component({
  selector: 'app-verse-list',
  templateUrl: './verse-list.html',
  styleUrl: './verse-list.css',
})
export class VerseList {
  readonly verses = input.required<DisplayVerse[]>();
  readonly showMeaning = input(false);
  readonly scriptClass = input('script-devanagari');
}

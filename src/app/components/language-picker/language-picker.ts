import { Component, input, output } from '@angular/core';
import { Language } from '../../models/chalisa.model';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.html',
  styleUrl: './language-picker.css',
})
export class LanguagePicker {
  readonly languages = input.required<Language[]>();
  readonly selectedId = input.required<string>();
  readonly languageChange = output<string>();
}

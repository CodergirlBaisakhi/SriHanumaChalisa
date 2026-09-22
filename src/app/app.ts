import { Component, inject } from '@angular/core';
import { LanguagePicker } from './components/language-picker/language-picker';
import { SearchBar } from './components/search-bar/search-bar';
import { VerseList } from './components/verse-list/verse-list';
import { ChalisaService } from './services/chalisa.service';

@Component({
  selector: 'app-root',
  imports: [SearchBar, LanguagePicker, VerseList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly chalisa = inject(ChalisaService);

  protected scriptClass(): string {
    return `script-${this.chalisa.selectedLanguage().script}`;
  }
}

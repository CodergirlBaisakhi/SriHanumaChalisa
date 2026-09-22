import { Injectable, computed, signal } from '@angular/core';
import { DEFAULT_LANGUAGE_ID, LANGUAGES } from '../data/languages';
import { transliterate } from '../data/transliterate';
import { VERSES } from '../data/verses';
import { DisplayVerse, Language } from '../models/chalisa.model';

const STORAGE_KEY = 'hanuman-chalisa-language';

@Injectable({ providedIn: 'root' })
export class ChalisaService {
  readonly languages = LANGUAGES;
  readonly selectedId = signal(this.readStoredLanguage());
  readonly showMeaning = signal(this.readStoredMeaning());
  readonly searchQuery = signal('');
  readonly searchMessage = signal('');

  readonly selectedLanguage = computed(
    () => this.languages.find((language) => language.id === this.selectedId()) ?? this.languages[0],
  );

  readonly verses = computed<DisplayVerse[]>(() => {
    const language = this.selectedLanguage();
    return VERSES.map((verse) => ({
      id: verse.id,
      type: verse.type,
      number: verse.number,
      meaningEn: verse.meaningEn,
      lines:
        language.script === 'roman'
          ? verse.roman
          : verse.hindi.map((line) => transliterate(line, language.script)),
    }));
  });

  selectLanguage(id: string): boolean {
    const language = this.languages.find((item) => item.id === id);
    if (!language) {
      return false;
    }
    this.selectedId.set(id);
    localStorage.setItem(STORAGE_KEY, id);
    this.searchMessage.set(`Showing Sri Hanuman Chalisa in ${language.name}.`);
    return true;
  }

  matchLanguage(rawQuery: string): Language | null {
    const query = rawQuery.trim().toLowerCase();
    if (!query) {
      return null;
    }

    const exact = this.languages.find(
      (language) =>
        language.id === query ||
        language.name.toLowerCase() === query ||
        language.nativeName.toLowerCase() === query ||
        language.aliases.some((alias) => alias.toLowerCase() === query),
    );
    if (exact) {
      return exact;
    }

    const contained = this.languages.find((language) =>
      language.aliases.some((alias) => query.includes(alias.toLowerCase())),
    );
    if (contained) {
      return contained;
    }

    return this.languages.find(
      (language) =>
        language.name.toLowerCase().includes(query) ||
        language.nativeName.toLowerCase().includes(query) ||
        language.aliases.some((alias) => alias.toLowerCase().includes(query)),
    ) ?? null;
  }

  search(rawQuery: string): void {
    this.searchQuery.set(rawQuery);
    const match = this.matchLanguage(rawQuery);
    if (match) {
      this.selectLanguage(match.id);
      return;
    }
    if (rawQuery.trim()) {
      this.searchMessage.set('No matching language. Try Odia, Hindi, Tamil, Bengali, and more.');
    } else {
      this.searchMessage.set('');
    }
  }

  toggleMeaning(): void {
    const next = !this.showMeaning();
    this.showMeaning.set(next);
    localStorage.setItem(`${STORAGE_KEY}-meaning`, String(next));
  }

  private readStoredLanguage(): string {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && this.languages.some((language) => language.id === stored)) {
        return stored;
      }
    } catch {
      return DEFAULT_LANGUAGE_ID;
    }
    return DEFAULT_LANGUAGE_ID;
  }

  private readStoredMeaning(): boolean {
    try {
      return localStorage.getItem(`${STORAGE_KEY}-meaning`) === 'true';
    } catch {
      return false;
    }
  }
}

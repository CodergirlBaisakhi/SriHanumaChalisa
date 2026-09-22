import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  readonly query = input('');
  readonly message = input('');
  readonly searched = output<string>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searched.emit(value);
  }
}

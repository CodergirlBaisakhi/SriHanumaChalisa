import { TestBed } from '@angular/core/testing';
import { ChalisaService } from './chalisa.service';

describe('ChalisaService', () => {
  let service: ChalisaService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [ChalisaService],
    });
    service = TestBed.inject(ChalisaService);
  });

  it('matches Odia from search phrases', () => {
    expect(service.matchLanguage('odia')?.id).toBe('odia');
    expect(service.matchLanguage('show in oriya')?.id).toBe('odia');
    expect(service.matchLanguage('ଓଡ଼ିଆ')?.id).toBe('odia');
  });

  it('matches Hindi, Tamil and Bengali', () => {
    expect(service.matchLanguage('hindi')?.id).toBe('hindi');
    expect(service.matchLanguage('tamil')?.id).toBe('tamil');
    expect(service.matchLanguage('bangla')?.id).toBe('bengali');
  });

  it('returns 43 verses including 40 chaupais', () => {
    const verses = service.verses();
    expect(verses.length).toBe(43);
    expect(verses.filter((verse) => verse.type === 'chaupai').length).toBe(40);
  });

  it('renders Odia script after selection', () => {
    service.selectLanguage('odia');
    expect(service.verses()[2].lines[0]).toContain('ଜୟ');
  });
});

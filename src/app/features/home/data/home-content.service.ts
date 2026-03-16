// src/app/features/home/data/home-content.service.ts
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeViewModel } from './home.models';
import { MOCK_HOME_VM } from './home.mock';

@Injectable({
  providedIn: 'root',
})
export class HomeContentService {
  // Neste momento a home usa dados fictícios locais.
  // Quando a API existir, substitua o retorno do "of(MOCK_HOME_VM)"
  // por uma chamada HTTP real em um endpoint como: GET /api/home.
  getHomeContent(): Observable<HomeViewModel> {
    return of(MOCK_HOME_VM);
  }
}

import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeViewModel } from './home.models';
import { MOCK_HOME_VM } from './home.mock';

@Injectable({
  providedIn: 'root',
})
export class HomeContentService {
  // Neste momento a home usa dados fictícios locais.
  getHomeContent(): Observable<HomeViewModel> {
    return of(MOCK_HOME_VM);
  }
}

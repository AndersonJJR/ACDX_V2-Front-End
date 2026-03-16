// src/app/features/home/home.page.ts
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeContentService } from './data/home-content.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, AsyncPipe, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  private readonly homeContentService = inject(HomeContentService);

  protected readonly vm$ = this.homeContentService.getHomeContent();
}

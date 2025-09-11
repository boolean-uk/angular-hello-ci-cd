// giphy.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Meme {
  postLink: string;
  title: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  private http = inject(HttpClient);

  getRandomMeme(): Observable<Meme> {
    return this.http.get<Meme>('https://meme-api.com/gimme')
  }
}


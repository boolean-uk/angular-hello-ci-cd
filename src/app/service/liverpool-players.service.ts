import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface LiverpoolPlayer {
  id: number;
  jerseyNumber: number | null;
  name: string | null;
  posision: string | null;
  age: number | null;
  height: string | null;
  weight: number | null;
}


@Injectable({
  providedIn: 'root'
})
export class LiverpoolPlayersService {
  
  private apiUrl = 'https://liverpool-players.netlify.app/.netlify/functions/liverpool-player-list';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<LiverpoolPlayer[]> {
    return this.http.get<LiverpoolPlayer[]>(this.apiUrl);
  }

}

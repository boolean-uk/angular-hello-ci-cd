import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiverpoolPlayer, LiverpoolPlayersService } from './service/liverpool-players.service'
import { CommonModule } from '@angular/common';

declare var window: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'liverpool-players';
  players: LiverpoolPlayer[] = [];
  domain: string = '';

  constructor(private liverpoolService: LiverpoolPlayersService) {}

  ngOnInit() {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    this.domain = baseUrl
      .replace('http://', '')
      .replace('https://', '')
      .replace(':4200', '');
    
    
  this.liverpoolService.getPlayers().subscribe({
    next: (data) => this.players = data,
    error: (err) => console.error('HTTP Error:', err)
  });

  }
}

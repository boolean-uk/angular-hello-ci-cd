import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'hello-ci-cd';

  domain: string = '';

  version: string = '1.1.1';

  ngOnInit() {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    this.domain = baseUrl
      .replace('http://', '')
      .replace('https://', '')
      .replace(':4200', '');
  }
}

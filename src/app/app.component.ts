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

  imagePath: string = "C:\\Users\\BUtvik\\source\\angular\\angular-hello-ci-cd\\src\\assets\\images\\beautifulImage.jpg";
  imageAlt: string = "beautiful people"

  ngOnInit() {
    const parsedUrl = new URL(window.location.href);
    const baseUrl = parsedUrl.origin;
    this.domain = baseUrl
      .replace('http://', '')
      .replace('https://', '')
      .replace(':4200', '');
  }
}

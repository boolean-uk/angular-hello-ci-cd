import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';
import { Observable } from 'rxjs';
import { Meme } from '../meme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.css'
})
export class MemeComponent implements OnInit{

  constructor(private memeService: MemeService) {}

  meme: Meme | null = null;

isLoading: boolean = false;

ngOnInit(): void {
  this.isLoading = true;
  this.memeService.getRandomMeme().subscribe((data) => {
    if(data.nsfw) {
     this.ngOnInit();
    }
    else
    this.meme = data; 
    this.isLoading = false;
  });
}
}

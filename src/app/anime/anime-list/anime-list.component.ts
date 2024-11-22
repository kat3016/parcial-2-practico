import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  num_episodes: number = 0;
  totalRatings: number = 0;
  

  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
    this.getTotalEpisodios();
    this.getRatingPromedio();
  }

  getTotalEpisodios(): void {
    this.num_episodes = this.animes.reduce((total, anime) => total + anime.episode, 0);
    
  }

 
  getRatingPromedio():void {
    const num: number = this.animes.reduce((total, anime) => total + anime.Rating, 0);
    this.totalRatings = num/ this.animes.length;
    
  }
}

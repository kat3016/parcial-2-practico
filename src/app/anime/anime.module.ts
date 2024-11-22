import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { AnimeRoutingModule } from './anime.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, AnimeRoutingModule, RouterModule
  ],
  exports: [AnimeListComponent],
  declarations: [AnimeListComponent, AnimeDetailComponent]
})
export class AnimeModule { }

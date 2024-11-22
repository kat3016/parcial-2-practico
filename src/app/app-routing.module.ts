import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';


const routes: Routes = [
  { path: '', component:  AnimeListComponent },
  { path: 'books', loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
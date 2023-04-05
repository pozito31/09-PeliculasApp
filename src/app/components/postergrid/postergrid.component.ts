import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postergrid',
  templateUrl: './postergrid.component.html',
  styleUrls: ['./postergrid.component.css'],
})
export class PostergridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.movies);
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
  }
}

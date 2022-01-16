"use strict";
const numberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
const seenMovieQuestion = prompt ("Один из последних просмотренных фильмов?","");
const movieRate = prompt ("На сколько оцените его?","");
const seenMovieQuestionSecond = prompt ("Один из последних просмотренных фильмов?","");
const movieRateSecond = prompt ("На сколько оцените его?","");
personalMovieDB.movies[seenMovieQuestion] = movieRate;
personalMovieDB.movies[seenMovieQuestionSecond] = movieRateSecond;
console.log(personalMovieDB);

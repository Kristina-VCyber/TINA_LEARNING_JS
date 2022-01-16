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
if (1) {
  console.log("OK!");


  
} else {
  console.log("Error");
}
const num = 2;
if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Too much")
} else {
  console.log("OK!");
}
(num === 50)? console.log("OK!") : console.log("Error");

const numForSwitchCheck = 52;
switch (numForSwitchCheck) {
  case 49:
    console.log("Wrong");
    break;
  case 100:
    console.log("Wrong");
    break;
  case 50:
    console.log("Yes");
    break;
  default:
    console.log("Not this time");
    break;
}


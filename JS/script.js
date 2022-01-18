"use strict";
let numberOfFilms;
function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN (numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const seenMovieQuestion = prompt("Один из последних просмотренных фильмов?", "");
    const movieRate = prompt("На сколько оцените его?", "");
    if (seenMovieQuestion !== null && movieRate !== null && seenMovieQuestion !== "" && movieRate !== "" && seenMovieQuestion.length < 50) {
      personalMovieDB.movies[seenMovieQuestion] = movieRate;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();






function detectPersonalLevel () {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно много фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
detectPersonalLevel ();
function showMyDB (hidden) {
  if (!hidden) {
  console.log(personalMovieDB)
}
}
showMyDB(personalMovieDB.private);
function writeYourGenres(){
  for (let i=1;i<=3;i++) {
    const genre =
    personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

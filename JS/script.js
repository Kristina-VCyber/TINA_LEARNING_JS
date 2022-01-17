"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

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
if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно много фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}


// console.log(personalMovieDB);


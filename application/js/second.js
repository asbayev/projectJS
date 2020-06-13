"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

let x = prompt("Один из последних просмотренных фильмов?", ''), 
    z = prompt   ("На сколько оцените его?", ''),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("Один из последних просмотренных фильмов?", '');

personalMovieDB.movies[x] = z;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);a
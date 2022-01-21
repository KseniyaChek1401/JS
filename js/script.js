"use sctrict";

// 7. ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('Where are you from?', '');
// answers[2] = prompt('What is age?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// 8. ИНТЕРПОЛЯЦИЯ (ES6)

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Hello, ${user}`);

// 9. ОПЕРАТОРЫ JS

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
// decr = 10;

// // ++incr;
// // decr--;

// console.log(++incr);
// console.log(--decr);


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





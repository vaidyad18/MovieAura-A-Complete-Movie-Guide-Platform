const searchbtn = document.querySelector(".searchbar button");
const input = document.querySelector("input");
const sorry = document.querySelector(".sorry");
const movieArea = document.querySelector(".moviedata");
const loader = document.querySelector(".loader");
const home = document.querySelector(".homescreen");
const logo = document.querySelector(".logo img");

async function getmovieinfo(movie) {
  const mykey = "6e3de0e4";
  const url = `https://www.omdbapi.com/?apikey=${mykey}&t=${movie}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.querySelector("main").style.height = "87.1%";

  home.classList.add("hide");
  movieArea.classList.add("hide");
  sorry.classList.add("hide");
  loader.classList.remove("hide");

  setTimeout(() => {
    loader.classList.add("hide");
    if (data.Response === "False") {
      movieArea.classList.add("hide");
      sorry.classList.remove("hide");
      home.classList.add("hide");
      return;
    } else if (data.Response === "True") {
      showmovie(data);
    }
  }, 1500);
}

let movieName = document.querySelector(".moviename");
let rating = document.querySelector(".rating p");
let pg = document.querySelector(".pg");
let year = document.querySelector(".year");
let duration = document.querySelector(".duration");
let genre1 = document.querySelector(".genre1");
let genre2 = document.querySelector(".genre2");
let genre3 = document.querySelector(".genre3");
let plot = document.querySelector(".plotinfo");
let cast = document.querySelector(".castinfo");
let poster = document.querySelector(".moviebanner img");

function showmovie(data) {
  sorry.classList.add("hide");
  movieArea.classList.remove("hide");
  home.classList.add("hide");

  movieName.innerHTML = data.Title;
  rating.innerHTML = data.imdbRating;
  poster.src = data.Poster;
  cast.innerHTML = data.Actors;
  plot.innerHTML = data.Plot;
  year.innerHTML = data.Year;
  duration.innerHTML = data.Runtime;
  pg.innerHTML = data.Rated;
  const genres = data.Genre.split(", ");
  if (genres.length == 1) {
    genre1.innerHTML = genres[0] ;
  }
  if (genres.length == 2) {
    genre1.innerHTML = genres[0] ;
    genre2.innerHTML = genres[1] ;
  }
  if (genres.length == 3) {
    genre1.innerHTML = genres[0] ;
    genre2.innerHTML = genres[1] ;
    genre3.innerHTML = genres[2] ;
  }
}

searchbtn.addEventListener("click", () => {
  const moviename = input.value.trim();
  if (moviename !== "") {
    getmovieinfo(moviename);
    return;
  } else {
    input.placeholder = "Please Enter a Movie Name";
    return;
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const moviename = input.value.trim();
    if (moviename !== "") {
      getmovieinfo(moviename);
      return;
    } else {
      input.placeholder = "Please Enter a Movie Name";
      return;
    }
  }
});

logo.addEventListener("click", () => {
  document.querySelector("main").style.height = "87.1%";

  loader.classList.remove("hide");
  home.classList.add("hide");
  sorry.classList.add("hide");
  movieArea.classList.add("hide");
  setTimeout(() => {
    loader.classList.add("hide");
    sorry.classList.add("hide");
    movieArea.classList.add("hide");
    home.classList.remove("hide");
  }, 1000);
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length * 2) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const newTranslateValue = -currentSlide * 5 + "%";
  document.querySelector(".slides").style.transform =
    "translateX(" + newTranslateValue + ")";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
});

document.querySelector(".first").addEventListener("click", () => {
  getmovieinfo("black%20adam");
});

document.querySelector(".second").addEventListener("click", () => {
  getmovieinfo("pathaan");
});

document.querySelector(".third").addEventListener("click", () => {
  getmovieinfo("jurassic%20park");
});

document.querySelector(".fourth").addEventListener("click", () => {
  getmovieinfo("uncharted");
});

document.querySelector(".fifth").addEventListener("click", () => {
  getmovieinfo("chennai%20express");
});

document.querySelector(".sixth").addEventListener("click", () => {
  getmovieinfo("war");
});

document.querySelector(".seventh").addEventListener("click", () => {
  getmovieinfo("fast%20&%20furious");
});

document.querySelector(".eigth").addEventListener("click", () => {
  getmovieinfo("captain%20america%20the%20winter%20soldier");
});

document.querySelector(".nine").addEventListener("click", () => {
  getmovieinfo("thor%20love");
});

document.querySelector(".ten").addEventListener("click", () => {
  getmovieinfo("midway");
});

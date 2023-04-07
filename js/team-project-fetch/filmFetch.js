// API-Key
// 4c6e55add2f00844e9f979bd7b0fac7c
export default class FilmRestAPI {
  constructor() {
    // this.searchQuery = "";
    this.page = 1;
  }

  async fetchMovies() {
    const API_KEY = "4c6e55add2f00844e9f979bd7b0fac7c";
    // const searchParams = new URLSearchParams({});
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      //   this.incrementPage();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    return (this.page += 1);
  }

  resetPage() {
    return (this.page = 1);
  }

  //   get query() {
  //     return this.searchQuery;
  //   }

  //   set query(newQuery) {
  //     this.searchQuery = newQuery;
  //   }
}

const movie = new FilmRestAPI();
console.log(movie.fetchMovies());

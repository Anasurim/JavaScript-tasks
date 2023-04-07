// API-Key
// 4c6e55add2f00844e9f979bd7b0fac7c
export default class FilmRestAPI {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  async fetchMovies() {
    const API_KEY = "4c6e55add2f00844e9f979bd7b0fac7c";
    const searchParams = new URLSearchParams({
      page: this.page,
      query: this.searchQuery,
    });
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&${searchParams}`;

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      this.incrementPage();

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

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const movie = new FilmRestAPI();

const refs = {
  form: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
};

// refs.form.addEventListener("submit", onSearch);

// async function onSearch(e) {
//   e.preventDefault();

//   movie.query = e.currentTarget.elements.searchQuery.value.trim();

//   try {
//     const hits = await movie.fetchMovies();
//     console.log(hits);
//     appendCardMarkup(hits);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

async function renderMarkUpMain() {
  try {
    const hits = await movie.fetchMovies();
    console.log(hits);
    appendCardMarkup(hits);
  } catch (error) {
    console.log("Error:", error);
  }
}

const IMG_URL = "https://image.tmdb.org/t/p/w300";

function appendCardMarkup(hits) {
  const markUp = hits.results.map(
    ({ title, release_date, poster_path: posterPath }) => `
        <div class="photo-card">
            
        <img src="${IMG_URL + posterPath}" alt="${title}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    
                    ${title}
                </p>
                <p class="info-item">
                   
                    ${release_date.slice(0, 4)}
                </p>
                
            </div>
        </div>`
  );

  refs.gallery.insertAdjacentHTML("beforeend", markUp.join(""));
}
renderMarkUpMain();

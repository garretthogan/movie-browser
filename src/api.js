const baseUrl = 'https://api.themoviedb.org/3';
const discover = `${baseUrl}/discover/movie`;
const movieInfo = `${baseUrl}/movie`;
const key = `api_key=${process.env.REACT_APP_KEY}`;
const byPopularity = 'sort_by=popularity.desc';
const releaseYear = year => `primary_release_year=${year}`;

export const getPopularMoviesByYear = year =>
  fetch(`${discover}?${releaseYear(year)}&${byPopularity}&${key}`)
    .then(res => res.json())
    .then(res => {
      return res.results.sort((a, b) =>
        Math.trunc(a.popularity) > Math.trunc(b.popularity) ? -1 : 1
      );
    })
    .catch(console.error);

export const getMovieById = id =>
  fetch(`${movieInfo}/${id}?${key}`)
    .then(res => res.json())
    .catch(console.error);

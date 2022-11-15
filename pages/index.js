import { useEffect, useState } from "react";

import Seo from "../components/Seo";

const API_KEY = "3b524a34352c4dd7f87f29a4dba72975";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async() => {
      const { results } = await (
         await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
         )
      ).json()
      setMovies(results)
    })();
  }, [])

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading ...</h4>}
      {/* movies가 존재하지않으면 동작 안함 */}
      {movies?.map(movie => {
        return(
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        )
      })}
    </div>
  );
}

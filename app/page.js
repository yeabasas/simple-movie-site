import Movie from "./movies";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json()
  return (
    <main>
      <h1 className="text-4xl">Popular Movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((moci) => (
          <Movie
            key={moci.id}
            id={moci.id}
            title={moci.title}
            poster_path={moci.poster_path}
            release_date={moci.release_date}
          />
        ))}
      </div>
    </main>
  );
}

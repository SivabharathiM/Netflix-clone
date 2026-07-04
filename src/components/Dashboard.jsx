 import "./Dashboard.css";

import  StrangerThings from "../assets/img1.jpg";
import ChastityHigh from "../assets/img2.jpg";
import Beast from "../assets/img3.jpg";
import  Archer from "../assets/img4.jpg";

function Dashboard() {

  const movies = [
    StrangerThings,
     ChastityHigh,
     Beast,
     Archer,
   ];

  return (
    <div className="dashboard">

      <nav className="navbar">
        <h1 className="logo">NETFLIX</h1>

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </nav>

      <div
        className="banner"
        style={{ backgroundImage: `url(${StrangerThings})` }}
      >
        <div className="banner-content">
          <h1>Stranger Things</h1>

          <p>
            Experience thrilling adventures and explore
            your favorite movies and TV shows.
          </p>

          <button>▶ Play</button>
        </div>
      </div>

      <div className="row">
        <h2>Popular on Netflix</h2>

        <div className="movies">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={movie}
              alt={`Movie ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
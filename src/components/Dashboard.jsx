 import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      
      <div className="navbar">
        <h1 className="logo">NETFLIX</h1>
      </div>

      <div className="hero">
        <h1>Unlimited movies, TV shows and more.</h1>

        <p>Watch anywhere. Cancel anytime.</p>

        <button className="watch-btn">
          Watch Now
        </button>
      </div>

      <div className="movies-section">
        <h2>Trending Now</h2>

      
      </div>

    </div>
  );
};

export default Dashboard;
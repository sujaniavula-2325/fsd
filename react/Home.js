// Home/Home.js
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
        <h2>Welcome to Book Store </h2>
        <p className="hero-text">
          Discover thousands of books across all genres. 
          Your perfect read is waiting for you!
        </p>
        <Link to="/books" className="explore-btn">Explore Books</Link>
          <h3>Free Shipping</h3>
          <p>Free delivery on orders over $50</p>
          <h3>Large Collection</h3>
          <p>Over 10,000 books available</p>
        
          <h3>Gift Wrapping</h3>
          <p>Free gift wrapping service</p>
    </div>
  );
}

export default Home;
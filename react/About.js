// About/About.js
function About() {
  return (
    <div className="about">
      <h2>About Book Mall </h2>
      <div className="about-content">
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in 2024, Book Mall started as a small online bookstore with a 
            passion for connecting readers with great books. Today, we're a community 
            of book lovers from around the world.
          </p>
        </div>
        
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            To make quality books accessible to everyone, foster a love for reading, 
            and support authors in sharing their stories with the world.
          </p>
        </div>
        
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Books Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Happy Readers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Authors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
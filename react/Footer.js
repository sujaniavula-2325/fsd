// Footer/Footer.js
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Book Store</h3>
          <p>Your favorite online bookstore</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/addbook">Add Book</a>
          <a href="/contact">Contact</a>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@bookstore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
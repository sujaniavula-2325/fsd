// src/AddBook/AddBook.js
import { useState } from 'react';
import './AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !author || !price) {
      alert('Please fill all fields');
      return;
    }
    
    if (isNaN(price) || price <= 0) {
      alert('Please enter valid price');
      return;
    }
    
    alert(`Book "${title}" added successfully!`);
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  return (
    <div className="addbook-page">
      <h1>Add New Book</h1>
      
      <div className="addbook-box">
        <h2>Book Information</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Book Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
            />
          </div>
          
          <div className="input-group">
            <label>Author Name:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
            />
          </div>
          
          <div className="input-group">
            <label>Price ($):</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              step="0.01"
              min="0"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Add Book
          </button>
        </form>
        
        <div className="preview">
          <h3>Book Preview</h3>
          <div className="book-preview">
            <p><strong>Title:</strong> {title || 'No title yet'}</p>
            <p><strong>Author:</strong> {author || 'No author yet'}</p>
            <p><strong>Price:</strong> ${price || '0.00'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
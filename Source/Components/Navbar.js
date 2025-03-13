import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './App.css'; // Ensure to import App.css for styles

const Navbar = ({ searchText, setSearchText, onSearch }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(); // Trigger search on Enter key press
      navigate('/search'); // Navigate to the search results page
    }
  };

  const handleSearchClick = () => {
    onSearch(); // Trigger the search when button is clicked
    navigate('/search'); // Navigate to the search results page
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to home
  };

  const handleAboutClick = () => {
    navigate('/about'); // Navigate to about page
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleAboutClick}>About</button>
      </div>
      <div className="search-section">
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Trigger search on Enter key press
          placeholder="Search for movies..."
        />
        <button onClick={handleSearchClick}>Search</button> {/* Button triggers navigation */}
      </div>
    </nav>
  );
};

export default Navbar;

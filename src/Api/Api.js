import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Style.css';

export default function Api() {
  const [countries, setCountries] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch countries data
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        console.log("API Response:", response.data); // Log API response to verify it's working
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error); // Log any API error
      });
  }, []);

  // Filter countries based on the search query
  const filteredCountries = countries.filter((country) => {
    const name = country.name.common.toLowerCase();
    return name.includes(searchQuery.toLowerCase());
  });

  // Paginate countries
  const currentCountries = filteredCountries.slice(currentIndex, currentIndex + 4); // Get the current 4 countries

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4); // Move 4 cards back
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCountries.length - 4) {
      setCurrentIndex(currentIndex + 4); // Move 4 cards forward
    }
  };

  const handleFlagClick = (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Log filtered countries to verify filtering is working
  console.log("Filtered Countries:", filteredCountries);

  return (
    <div className="api-body vh-100 d-flex justify-content-center align-items-center text-light">
      <div className="slider-container">
        {/* Title */}
        <h1 className="title">Discover the World with Flags</h1>

        {/* Search Bar */}
        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value); // Update search query
              console.log("Search Query:", e.target.value); // Log search query to verify it's updating
            }}
            className="form-control form-control-lg"
          />
        </div>

        {/* Card Grid */}
        <div className="card-grid d-flex justify-content-between flex-wrap">
          {currentCountries.map((country, index) => (
            <div key={index} className="country-card p-3">
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="country-flag rounded mb-3"
                onClick={() =>
                  country.latlng ? handleFlagClick(country.latlng[0], country.latlng[1]) : null
                }
                style={{ cursor: country.latlng ? 'pointer' : 'default' }}
              />
              <div className="country-info">
                <h2>{country.name.common}</h2>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
                <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                <p><strong>Currency:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons-container">
          <button
            className="nav-button left"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="nav-button right"
            onClick={handleNext}
            disabled={currentIndex >= filteredCountries.length - 4}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

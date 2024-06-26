import React, { useState } from 'react';
import Airportimage from '../../../public/images/airport.png';

const airports = [
    {
      name: "Istanbul Airport",
      code: "IST",
      city: "Istanbul",
      country: "Turkey",
      coordinates: { lat: 41.2753, lon: 28.7519 }
    },
    {
      name: "Sabiha Gökçen International Airport",
      code: "SAW",
      city: "Istanbul",
      country: "Turkey",
      coordinates: { lat: 40.9067, lon: 29.3092 }
    },
    {
      name: "Antalya Airport",
      code: "AYT",
      city: "Antalya",
      country: "Turkey",
      coordinates: { lat: 36.8987, lon: 30.8005 }
    },
    {
      name: "Hamburg Airport",
      code: "HAM",
      city: "Hamburg",
      country: "Germany",
      coordinates: { lat: 53.6304, lon: 9.9882 }
    },
    {
      name: "Hannover Airport",
      code: "HAJ",
      city: "Hannover",
      country: "Germany",
      coordinates: { lat: 52.4611, lon: 9.6850 }
    },
    {
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: "New York",
      country: "USA",
      coordinates: { lat: 40.6413, lon: -73.7781 }
    },
    {
      name: "Los Angeles International Airport",
      code: "LAX",
      city: "Los Angeles",
      country: "USA",
      coordinates: { lat: 33.9416, lon: -118.4085 }
    },
    {
      name: "O'Hare International Airport",
      code: "ORD",
      city: "Chicago",
      country: "USA",
      coordinates: { lat: 41.9742, lon: -87.9073 }
    },
    {
      name: "Heathrow Airport",
      code: "LHR",
      city: "London",
      country: "United Kingdom",
      coordinates: { lat: 51.4700, lon: -0.4543 }
    },
    {
      name: "Charles de Gaulle Airport",
      code: "CDG",
      city: "Paris",
      country: "France",
      coordinates: { lat: 49.0097, lon: 2.5479 }
    },
    {
      name: "Tokyo Haneda Airport",
      code: "HND",
      city: "Tokyo",
      country: "Japan",
      coordinates: { lat: 35.5494, lon: 139.7798 }
    },
    {
      name: "Dubai International Airport",
      code: "DXB",
      city: "Dubai",
      country: "United Arab Emirates",
      coordinates: { lat: 25.2532, lon: 55.3657 }
    },
    {
      name: "Hong Kong International Airport",
      code: "HKG",
      city: "Hong Kong",
      country: "Hong Kong",
      coordinates: { lat: 22.3080, lon: 113.9185 }
    },
    {
      name: "Frankfurt Airport",
      code: "FRA",
      city: "Frankfurt",
      country: "Germany",
      coordinates: { lat: 50.0379, lon: 8.5622 }
    },
    {
      name: "Changi Airport",
      code: "SIN",
      city: "Singapore",
      country: "Singapore",
      coordinates: { lat: 1.3644, lon: 103.9915 }
    },
    {
      name: "Amsterdam Schiphol Airport",
      code: "AMS",
      city: "Amsterdam",
      country: "Netherlands",
      coordinates: { lat: 52.3105, lon: 4.7683 }
    },
    {
      name: "Incheon International Airport",
      code: "ICN",
      city: "Seoul",
      country: "South Korea",
      coordinates: { lat: 37.4602, lon: 126.4407 }
    },
    {
      name: "Barcelona-El Prat Airport",
      code: "BCN",
      city: "Barcelona",
      country: "Spain",
      coordinates: { lat: 41.2974, lon: 2.0833 }
    },
    {
      name: "Sydney Kingsford Smith Airport",
      code: "SYD",
      city: "Sydney",
      country: "Australia",
      coordinates: { lat: -33.9399, lon: 151.1753 }
    },
    {
      name: "Toronto Pearson International Airport",
      code: "YYZ",
      city: "Toronto",
      country: "Canada",
      coordinates: { lat: 43.6777, lon: -79.6248 }
    }
  ];


function Airports() {
    
 const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setResults([]);
    } else {
      const filteredAirports = airports.filter(airport =>
        airport.name.toLowerCase().includes(value.toLowerCase()) ||
        airport.code.toLowerCase().includes(value.toLowerCase()) ||
        airport.city.toLowerCase().includes(value.toLowerCase()) ||
        airport.country.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredAirports);
    }
}

      
  return (
    <section className="search-section">
      <h1>Airports</h1>
      <p>You can search for airports and cities from below.</p>
      <input
        type="text"
        placeholder="Havaalani arayin..."
        value={searchTerm}
        onChange={handleSearch}
      />
       <ul>
        {results.map((airport) => (
          <li key={airport.code}>
            {airport.name} ({airport.code}) - {airport.city}, {airport.country}
          </li>
        ))}
      </ul>
      <div className="image">
        <img src={Airportimage} alt="" />
      </div>
     
    </section>
  )
}

export default Airports
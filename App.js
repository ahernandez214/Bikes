import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title";
import Message from "./Message";
import Entry from "./Entry";
import SearchBar from "./SearchBar";

const App = () => {
  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((data) => setStations(data.networks))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredStations = stations.filter((station) =>
    station.location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <Title text="City Bikes Network" />
        <img src="/bikes.prg.webp" alt="City Bikes" className="header-image" />
      </header>
      <main className="main-content">
        <Message text="Discover bike networks around the world:" />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid-container">
          {filteredStations.map((station) => (
            <Entry
              key={station.id}
              name={station.name}
              city={station.location.city}
              country={station.location.country}
            />
          ))}
        </div>
      </main>
      <footer className="app-footer">
        <p>
          Check out the code on{" "}
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

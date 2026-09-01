import React, { useState } from "react";

const LiveSearchFilter = () => {
  const names = [
    "Ritik",
    "Aman",
    "Priya",
    "Neha",
    "Rahul",
    "Karan",
    "Simran",
    "Anjali"
  ];

  const [search, setSearch] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Live Search Filter</h2>

      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default LiveSearchFilter;
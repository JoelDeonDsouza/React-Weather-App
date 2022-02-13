import React, { useState } from "react";
import styles from "./styles.css";

const api = {
  key: "5dbb60bf5aaa4b3506820753fb5246aa",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search......"
          />
        </div>
      </main>
    </div>
  );
}

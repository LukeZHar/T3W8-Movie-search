import React, { useState } from "react";

export default function Home() {
    const [query, setQuary] = useState("");

    const fetchMovies = async() => {
    //     // Using fetch
    //     const response = await fetch(`http://www.omdbapi.com/${apikey}=${query}`);

    //     // Using axios
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <input 
            type="text" 
            placeholder="Search for a movie..."
            />
            <button>Search</button>
        </div>
    )
}
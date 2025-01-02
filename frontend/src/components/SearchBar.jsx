import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
    const [query, setQuery] = useState('');


    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     if (query.trim()) {
    //         // Logic for search goes here, for example:

    //         // You could also trigger a search function or redirect the user to a search page.
    //     }
    // };

    return (
        <form className="searchBar" >
            <input
                type="text"
                className="searchInput"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
            <button type="submit" className="searchButton">
                <IoSearchOutline className="searchIcon" />
            </button>
        </form>
    );
};

export default SearchBar;
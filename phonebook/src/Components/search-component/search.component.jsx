import React from "react"
import "./search.component.css";

const SearchComponent = ({searchText, handleChange, selectText}) => {
    return (
        <div className="search-container">
            <input type="text" name="search" placeholder="Search Contacts" value={searchText} onChange={handleChange}></input>
            <select onChange={handleChange} value={selectText} name="sortType">
                <option value="name">Name</option>
                <option value="phone_number">Phone Number</option>
                <option value="postal_code">Postal Code</option>
            </select>
        </div>
    )
}

export default SearchComponent;
import React, {Component} from 'react';

class SearchBar extends Component {

    render(){

        const {searchTerm, searchChanged, handleSearch, clearResults} = this.props;

        return(
            <div id="searchBar">
                <label htmlFor="searchInput">Search: </label>
                <input 
                    id="searchInput" 
                    type="text"
                    value={searchTerm}
                    onChange={event => searchChanged(event.target.value)}
                />

                <input 
                    type="submit"
                    value="Search"
                    onClick={e => {
                        handleSearch(e)
                        searchChanged('');
                        clearResults();
                    }}
                />    
            </div>
        )
    }
}

export default SearchBar;
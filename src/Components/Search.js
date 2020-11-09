import React, {Component} from 'react';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';


class Search extends Component{
    
    render(){
        
        return(
            <div id="searchContainer">
                <SearchBar 
                    searchTerm = {this.props.searchTerm}
                    searchChanged = {this.props.searchChanged}
                    handleSearch = {this.props.handleSearch}
                    clearResults = {this.props.clearResults}
                />
                <FilterOptions 
                    filterPrintChanged = {this.props.filterPrintChanged}
                    filterTypeChanged = {this.props.filterTypeChanged}
                    handleFilterChange = {this.props.handleFilterChange}
                />
                
            </div>
        )
    }
}

export default Search;
import React, {Component} from 'react';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import api from '../apiKey';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            filterPrint: false,
            filterType: false,
            searchResults: [],
        };
    }

    searchChanged = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    filterPrintChanged = (filterPrint) => {
        this.setState({
            filterPrint
        })
    }

    filterTypeChanged = (filterType) => {
        this.setState({
            filterType
        })
    }

    handleFilterChange = (value) => {
        if(value === false){
            //do nothing
            this.setState({
                filter: true
            })
        } else if (value === 'reset'){
            this.setState({filter: false})
        } else { this.setState({filter:true})}
        
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('handle search fired');
        const endPoint = 'https://www.googleapis.com/books/v1/volumes?q=';
        const authorization = `key=${api}`
        let titleSearchTerm = `intitle:${this.state.searchTerm}`
        let searchQuery=`${endPoint}${titleSearchTerm}&${authorization}`

        // if there is a print filter
        // append it do the search query
        if(this.filterPrintChanged){
            //append
        }
        
        // if there is a type filter
        // append it do the search query
        if(this.filterTypeChanged){
            //append
        }



        fetch(searchQuery, {method: 'GET'})
            .then(response => response.json())
            .then(data => 
                {
                    this.setState({
                        searchResults: data.items
                    })
                    console.log(this.state.searchResults)
            })

        


    }

    render(){
        return(
            <div id="searchContainer">
                <SearchBar 
                    searchTerm = {this.state.searchTerm}
                    searchChanged = {this.searchChanged}
                    handleSearch = {this.handleSearch}
                />
                <FilterOptions 
                    filterPrintChanged = {this.filterPrintChanged}
                    filterTypeChanged = {this.filterTypeChanged}
                    handleFilterChange = {this.handleFilterChange}
                />
                
            </div>
        )
    }
}

export default Search;
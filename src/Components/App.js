import './App.css';
import Search from './Search';
import BookList from './BookList';
import React, {Component} from 'react';
// import api from '../apiKey';

class App extends Component {
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

  clearResults = () =>{
    this.setState({searchResults: []})
  }


  handleSearch = (e) => {
    //prevent page from reloading
    e.preventDefault();
    

    const endPoint = 'https://www.googleapis.com/books/v1/volumes?q=';
    // const authorization = `key=${api}`
    let titleSearchTerm = `intitle:${this.state.searchTerm}`
    let searchQuery=`${endPoint}${titleSearchTerm}`

    // if there is a print filter
    // append it do the search query
    if(this.state.filterPrint && this.state.filterPrint !== 'false' ){
        //append the value
      searchQuery += `&printType=${this.state.filterPrint}`;
    }
    
    // if there is a type filter
    // append it do the search query
    if(this.state.filterType && this.state.filterType !== 'false'){
      searchQuery += `&filter=${this.state.filterType}`;
    }

    //append authorization token to end of query
    // searchQuery += `&${authorization}`;



    fetch(searchQuery, {method: 'GET'})
        .then(response => response.json())
        .then(data => 
            {
              this.setState({
                  searchResults: data.items
              })
        })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1> Google Book Search </h1>
        </header>
        <main>
          <Search 
            searchChanged={this.searchChanged}
            filterPrintChanged={this.filterPrintChanged}
            filterTypeChanged={this.filterTypeChanged}
            handleFilterChange={this.handleFilterChange}
            handleSearch={this.handleSearch}
            searchTerm={this.state.searchTerm}
            clearResults={this.clearResults}
          />
          <BookList 
            searchResults={this.state.searchResults}
          />
      </main>  
    </div>
    )
  }
}

export default App;

import './App.css';
import Search from './Search';
import BookList from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Google Book Search</h1>
      </header>
      <main>
        <Search />
        <BookList />
      </main>
      
    </div>
  );
}

export default App;

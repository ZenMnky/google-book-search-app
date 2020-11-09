import React, {Component} from 'react';
import BookmarkItem from './BookmarkItem';

class BookList extends Component {
    render(){
        return(
            <section id="bookList">
                <h2>Book List</h2>
                <BookmarkItem />
                <BookmarkItem />
            </section>
        )
    }
}

export default BookList;
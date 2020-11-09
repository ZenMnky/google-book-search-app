import React, {Component} from 'react';
import BookmarkItem from './BookmarkItem';

class BookList extends Component {

    render(){
        let { searchResults } = this.props;
        let searchArray = searchResults.map(bookObject => {
            
            let title = bookObject.volumeInfo.title //string
            let img = bookObject.volumeInfo.imageLinks.smallThumbnail //string
            let description = bookObject.volumeInfo.description //string
            let infoLink = bookObject.volumeInfo.infoLink;
            let authorArray = bookObject.volumeInfo.authors;
            let authorName = '';
            let price = '';
            
            // //assigning author name
            if(authorArray){
                if(authorArray.length > 1){
                    //if there is more than one author, join into a string
                    authorName = authorArray.join();
                } else {
                    //assign the value at the first index position
                    authorName = authorArray[0];
                }
            } else {
                authorName = 'Unknown';
            }
            
    
            //checking if price exists, 
            //otherwise check for 'free', otherwise 'unknown'
            if(bookObject.saleInfo.retailPrice){
                price = bookObject.saleInfo.retailPrice.amount;
            } else if (bookObject.saleInfo.saleability){
                price = bookObject.saleInfo.saleability
            } else {
                price = ' Unknown';
            }


            return (
            <BookmarkItem 
                title={title}
                img={img}
                authorName={authorName}
                price={price}
                description={description}
                infoLink={infoLink}
                key={`${title}${authorName}`}
            />
            )
        })
        return(
            <section id="bookList">
                <h2>Book List</h2>
                {searchArray}
            </section>
        )
    }
}

export default BookList;
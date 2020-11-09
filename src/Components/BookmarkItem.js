import React, {Component} from 'react';

class BookmarkItem extends Component{
    render(){
        let title = `Book Title`
        let img = `http://books.google.com/books/content?id=MJ09AAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`;
        let authorName = `C Warren Hollister`;
        let price = `50.00`
        let description = `The resulting volume is one that will be welcomed by studens and general readers alike`;

        return(
            <div className="bookmark_item">
                <div className="bookmark_item-title">
                <h1>{title}</h1>
                </div>
                
                <div className="bookmark_item-content">
                    <div className="bookmark_item-content_cover-img">
                        <img src={img} alt='book cover' />
                    </div>
                    <div className="bookmark_item-content_description">
                        <p>Author: {authorName}</p>
                        <p>Price: ${price}</p>
                        <p>{description}</p>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default BookmarkItem;

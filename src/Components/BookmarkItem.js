import React, {Component} from 'react';

class BookmarkItem extends Component{
    render(){
        let {
            title, 
            img, 
            authorName, 
            price, 
            description,
            infoLink
        } = this.props;
        

        return(
            <div className="bookmark_item">
                <div className="bookmark_item-title">
                <h1>{title}</h1>
                </div>
                
                <div className="bookmark_item-content">
                    <div className="bookmark_item-content_cover-img">
                        <a href={infoLink} target='_blank'>
                            <img src={img} alt='book cover' />
                        </a>
                    </div>
                    <div className="bookmark_item-content_description">
                        <p>Author: {authorName}</p>
                        <p>Price: $ {price}</p>
                        <p>{description}</p>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default BookmarkItem;

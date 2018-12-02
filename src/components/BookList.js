import React from 'react';
import BookListItem from './BookListItem';

class BookList extends React.Component {

   render() {
      let bookListing;

      if (Array.isArray(this.props.books)) {
         bookListing = this.props.books.map( book => {
            return (
               <BookListItem 
                  key={book.name}
                  book={book}
                  removeFromInventory={this.props.removeFromInventory}
                  sendBookToEdit={this.props.sendBookToEdit}
               />
            )
         });
      } else {
         bookListing = <h4>No books on stock</h4>
      }

      return (
         <ul className="bookList">
            <h2>Book list</h2>
            { bookListing }
         </ul>
      )
   }
}

export default BookList;
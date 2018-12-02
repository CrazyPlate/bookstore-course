import React from 'react';
import BookView from './BookView';
import { fbase } from '../fbase';

class Inventory extends React.Component {

   constructor() {
      super();
      this.state = {

      }
   }

   componentDidMount() {
      this.ref = fbase.syncState('bookstore/books', {
         context: this,
         state: 'books'
      });
   }

   componentWillUnmount() {
      fbase.removeBinding(this.ref);
   }

   render() {

      let bookListing;

      if (Array.isArray(this.state.books)) {
         bookListing = this.state.books.map( book => {
            if (book.onStock) {
               return (<BookView key={book.name} book={book} addToOrder={this.props.addToOrder} />)
            } else {
               return (null)
            }
         });
      } else {
         bookListing = <h4>No books on stock</h4>
      }

      const ulCss = {
         listStyle: "none"
      };

      return (
         <ul className="inventory col-md-6" style={ulCss}>
            <h2>Bookstore inventory</h2>
            { bookListing }
         </ul>
      )
   }
}

export default Inventory;
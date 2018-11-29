import React from 'react';
import BookView from './BookView';
import { fbase } from '../fbase';

class Inventory extends React.Component {

   constructor() {
      super();
      this.state = {
         books: []
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
      const bookListing = this.state.books.map( book => {
         return <BookView book={book} addToOrder={this.props.addToOrder} />
      });

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
import React from 'react';
import LoggingForm from './LoggingForm';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import { fbase } from '../fbase';
import { Link } from 'react-router-dom';

class AdminPanel extends React.Component {

   constructor() {
      super();
      this.state = {
         loggedIn: localStorage.getItem('loggedIn'),
         editMode: false,
         bookToEdit: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: "",
            genre: "",
            price: ""
         }
      };
   };

   changeLoggedIn = (newValue) => {
      this.setState({
         loggedIn: newValue
      })
   }

   addNewBook = (book) => this.setState({
      books: [...this.state.books, book],
      editMode: false,
      bookToEdit: {
         name: "",
         author: "",
         description: "",
         onStock: true,
         image: "",
         genre: "",
         price: ""
      }
   })

   componentDidMount() {
      if (localStorage.getItem('loggedIn')) {
         this.setState({
            loggedIn: localStorage.getItem('loggedIn')
         })
      }
      this.ref = fbase.syncState('bookstore/books', {
         context: this,
         state: 'books'
      });
   }

   componentWillUnmount() {
      fbase.removeBinding(this.ref);
   }

   removeFromInventory = (title) => {
      this.setState({
         books: this.state.books.filter(book => title !== book.name)
      })
   }

   sendBookToEdit = (bookToEdit) => {
      this.setState({
         editMode: true,
         bookToEdit: bookToEdit
      });
   }

   editBook = (oldBookTitle, bookAfterEdit) => {
      const newBooks = this.state.books.filter(book => oldBookTitle !== book.name);
      this.setState({
         books: [...newBooks, bookAfterEdit],
         editMode: false,
         bookToEdit: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: "",
            genre: "",
            price: ""
         }
      })
   }

   render() {
      return (
         <div>
            {!this.state.loggedIn &&
               <LoggingForm 
                  changeLoggedIn = {this.changeLoggedIn}
               />
            }
            {this.state.loggedIn &&
               <div className="adminPanel">
                  <div className="col-md-4">
                     <AddBookForm
                        changeLoggedIn = {this.changeLoggedIn}
                        editMode = {this.state.editMode}
                        book = {this.state.bookToEdit}
                        addNewBook = {this.addNewBook}
                        editBook = {this.editBook}
                     />
                  </div>
                  <div className="col-md-6">
                     <BookList
                        books = {this.state.books}
                        editBook = {this.sendBookToEdit}
                        removeFromInventory = {this.removeFromInventory}
                        sendBookToEdit = {this.sendBookToEdit}
                     />
                  </div>
                  <div className="col-md-2">
                     <Link to="/" ><button className="btn btn-info rightBtn">Go to BookStore</button></Link>
                  </div>
               </div>
            }
         </div>
      )
   }
}

export default AdminPanel;
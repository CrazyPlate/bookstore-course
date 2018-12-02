import React from 'react';
import { fbase } from '../fbase';

class AddBookForm extends React.Component {

   constructor() {
      super();
      this.state = {
         books: [],
         book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: "",
            genre: ""
         }
      }
   }

   handleChange = (evt) => {
      let newBook;
      if (evt.target.name === "onStock") {
         newBook = {
            ...this.state.book,
            [evt.target.name]: evt.target.checked
         }
      } else if (evt.target.name === "genre") {
         newBook = {
            ...this.state.book,
            [evt.target.name]: evt.target.value
         }
      } else {
         newBook = {
            ...this.state.book,
            [evt.target.name]: evt.target.value
         }
      }

      this.setState({
         book: newBook
      })
   }

   componentDidMount() {
      if(localStorage.getItem('loggedIn')) {
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

   editBook = (evt) => {
      evt.preventDefault();
      this.setState({
         books: this.state.books.filter( book => title !== book.name )
      })

      let book = { ...this.state.book };
      
      if (Array.isArray(this.state.books)) {
         this.setState({ books: [...this.state.books, book] })
      } else {
         this.setState({ books: [book] })
      }
   }

   render() {
      return (
         <div className="addBookForm col-md-4">
            <form onSubmit={this.editBook}>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Book name"
                     id="name"
                     name="name"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.name}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Book author"
                     id="author"
                     name="author"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.author}
                  />
               </div>
               <div className="form-group">
                  <textarea
                     placeholder="Book description"
                     id="description"
                     name="description"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.description}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Book image"
                     id="image"
                     name="image"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.image}
                  />
               </div>
               <div className="form-group">
                  <select
                     class="form-control" 
                     id="genre" 
                     name="genre"
                     onChange={this.handleChange}>
                     <option value="" disabled selected>Book genre</option>
                     <option value="Fantasy">Fantasy</option>
                     <option value="Science Fiction">Science Fiction</option>
                     <option value="Komedia">Komedia</option>
                     <option value="Powieść Historyczna">Powieść Historyczna</option>
                  </select>
               </div>
               <div className="form-group">
                  <input
                     type="checkbox"
                     id="onStock"
                     name="onStock"
                     onChange={this.handleChange}
                     value={this.state.book.onStock}
                  />
                  <label htmlFor="onStock" className="form-check-label">On stock</label>
               </div>
               <div className="form-group">
                  <button type="submit" className="btn btn-success">Edit</button>
               </div>
            </form>
         </div>
      )
   }
}

export default AddBookForm;
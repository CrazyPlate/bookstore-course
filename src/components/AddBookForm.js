import React from 'react';
import { firebaseApp } from '../fbase';

class AddBookForm extends React.Component {

   constructor() {
      super();
      this.state = {
         book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: "",
            genre: "",
            price: ""
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

   addNewBook = (evt) => {
      evt.preventDefault();
      if (!this.props.editMode) {
         const newBook = { ...this.state.book };
         this.props.addNewBook(newBook);
         this.setState({
            book: {
               name: "",
               author: "",
               description: "",
               onStock: true,
               image: "",
               genre: "",
               price: ""
            }
         })
      } else {
         let newBook = Object.assign({}, this.props.book);
         for ( let attr in this.props.book ) {
               if(this.state.book[attr]) {
                  if(this.state.book[attr]!==this.props.book[attr]) {
                     newBook[attr] = this.state.book[attr];
                  }
               }
         }
         this.props.editBook(this.props.book.name, newBook);
         this.setState({
            book: {
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
      evt.target.reset();
   }

   logOut = (evt) => {
      evt.preventDefault();
      firebaseApp.auth().signOut();
      localStorage.setItem("loggedIn", false);
      this.props.changeLoggedIn(false);
   }

   render() {
      let editAddButton;
      if (this.props.editMode) {
         editAddButton = <button type="submit" className="btn btn-success">Edit</button>
      } else {
         editAddButton = <button type="submit" className="btn btn-primary">Add</button>
      }

      return (
         <div className="addBookForm">
            <form onSubmit={this.addNewBook}>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="Book name"
                     id="name"
                     name="name"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.name || this.props.book.name}
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
                     value={this.state.book.author || this.props.book.author}
                  />
               </div>
               <div className="form-group">
                  <textarea
                     placeholder="Book description"
                     id="description"
                     name="description"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.book.description || this.props.book.description}
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
                     value={this.state.book.image || this.props.book.image}
                  />
               </div>
               <div className="form-group">
                  <select
                     className="form-control" 
                     id="genre" 
                     name="genre"
                     onChange={this.handleChange}
                     value="Book genre"
                  >
                     <option value="Book genre" disabled>Book genre</option>
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
                     value={this.state.book.onStock || this.props.book.onStock}
                  />
                  <label htmlFor="onStock" className="form-check-label">On stock</label>
                  <input 
                     type="number" 
                     min="0.00" 
                     max="10000.00" 
                     step="0.01"
                     id="price"
                     name="price"
                     placeholder="Price"
                     onChange={this.handleChange}
                     value={this.state.book.price || this.props.book.price} 
                  />
               </div>
               <div className="form-group">
                  { editAddButton }
                  <button onClick={this.logOut} className="btn btn-danger rightBtn">Log Out</button>
               </div>
            </form>
         </div>
      )
   }
}

export default AddBookForm;
import React from 'react';
import { fbase } from '../fbase';

class AdminPanel extends React.Component {

   constructor() {
      super();
      this.state = {
         books: [],
         book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: ""
         }
      };
   };

   handleChange = (evt) => {
      let newBook;
      if (evt.target.name === "onStock") {
         newBook = {
            ...this.state.book,
            [evt.target.name]: evt.target.checked
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

      let newBook = { ...this.state.book };

      /* this.props.addBook(newBook); */

      if(Array.isArray(this.state.books)) {
         this.setState({books: [...this.state.books, newBook]}) 
      } else {  
         this.setState({books: [newBook]})
      }

      this.setState({
         book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: ""
         }
      })
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

      const buttonCss = {
         float: "right"
      };
      const panelCss = {
         padding: "10px",
         background: "darkgray"
      };

      return (
         <div className="adminPanel col-md-4" style={panelCss}>
            <form onSubmit={this.addNewBook}>
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
                  <input
                     type="checkbox"
                     id="onStock"
                     name="onStock"
                     onChange={this.handleChange}
                     value={this.state.book.onStock}
                  />
                  <label htmlFor="onStock" className="form-check-label">On stock</label>
                  <button type="submit" className="btn btn-secondary" style={buttonCss}>Add</button>
               </div>

            </form>
         </div>
      );
   }
}

export default AdminPanel;
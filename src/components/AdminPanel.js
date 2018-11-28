import React from 'react';

class AdminPanel extends React.Component {

   constructor() {
      super();
      this.state = {
         book: {
            name: "",
            author: "",
            description: "",
            onStock: false,
            image: ""
         },
         books: []
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

      let newBooks = [...this.state.books];
      let newBook = { ...this.state.book };

      newBooks.push(newBook);

      this.setState({
         books: newBooks,
         book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: ""
         }
      })
   }

   render() {

      const buttonCss = {
         float: "right"
      }

      return (
         <div className="adminPanel col-md-4" >
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
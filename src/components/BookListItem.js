import React from 'react';

export default class BookListItem extends React.Component {
   render() {
      let onStock;
      if (this.props.book.onStock) {
         onStock = <i>on stock</i>
      } else {
         onStock = <i>out of stock</i>
      }
      return (
         <li className="bookListItem" >
            <div className="row">
               <div className="col-4">
                  <b>{this.props.book.name}</b>
               </div>
               <div className="col-3">
                  <i>{this.props.book.author}</i>
               </div>
               <div className="col-3">
                  <b>{this.props.book.price}$</b>
               </div>
               <div className="col-2">
                  <button 
                     onClick={ (evt) => this.props.sendBookToEdit(this.props.book)}
                     className="btn btn-success btn-sm rightBtn">
                     Edit book
                  </button>
               </div>
            </div>
            <div className="row">
               <div className="col-4">
                  {this.props.book.genre}
               </div>
               <div className="col-3">
                  {this.props.book.description}
               </div>
               <div className="col-3">
                  { onStock }
               </div>
               <div className="col-2">
                  <button 
                     onClick={ (evt) => this.props.removeFromInventory(this.props.book.name)}
                     className="btn btn-danger btn-sm rightBtn">
                     Remove book
                  </button>
               </div>
            </div>
         </li>
      );
   }
}
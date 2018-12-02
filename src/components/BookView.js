import React from 'react';

export default class BookView extends React.Component {
   render() {
      return (
         <li className="bookView row" >
            <div className="col-md-2">
               <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
            </div>
            <div className="col-md-6">
               <b>{this.props.book.name}</b>
               <i> - </i>
               <i>{this.props.book.author}</i><br/>
               <p>{this.props.book.description}</p><br/>
               <h2>{this.props.book.genre}</h2>
            </div>
            <div className="col-md-2">
               <b>{this.props.book.price}$</b>
               <button className="btn btn-secondary" onClick={ () => this.props.addToOrder( this.props.book ) }>Add to order</button>
            </div>
         </li>
      );
   }
}
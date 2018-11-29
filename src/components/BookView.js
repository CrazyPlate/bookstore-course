import React from 'react';

export default class BookView extends React.Component {
   render() {
      return (
         <li className="bookView row" >
            <div className="col-md-2">
               <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
            </div>
            <div className="col-md-6">
               <b>{this.props.book.name}</b><br />
               <i>{this.props.book.author}</i>
            </div>
            <div className="col-md-4">
               <button className="btn btn-secondary" onClick={ () => this.props.addToOrder( this.props.book ) }>Add to order</button>
            </div>
         </li>
      );
   }
}
import React from 'react';

export default class OrderView extends React.Component {
   render() {
      return (
         <li className="orderView row">
            <div className="col-md-8">
               <span><b>{this.props.book.name}</b></span>
            </div>
            <div className="col-md-4">
               <button className="btn btn-danger" onClick={ () => this.props.removeFromOrder( this.props.book.name ) } >Remove</button>
            </div>
         </li>
      );
   }
}
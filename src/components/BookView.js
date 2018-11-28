import React from 'react';

export default class BookView extends React.Component {
   render() {
      return (
         <li>
            <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
            <b> {this.props.book.name} </b>
            <i>{this.props.book.author}</i>
         </li>
      );
   }
}
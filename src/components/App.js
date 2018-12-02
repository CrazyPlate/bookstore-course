import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Footer from './Footer';
import '../index.css';

class App extends React.Component {

   constructor() {
      super();
      this.state = {
         order: []
      }
   }

   addToOrder = (book) => {
      this.setState({
         order: [...this.state.order, book]
      })
   }

   removeFromOrder = (title) => {
      this.setState({
         order: this.state.order.filter( book => title !== book.name )
      })
   }

   render() {
      return (
         <div className="app container">
            <Header />
            <div className="row mainView">
               <Order 
                  order={this.state.order} 
                  removeFromOrder={this.removeFromOrder} 
                  key={this.state.order.name}
               />
               <Inventory 
                  books={this.state.books} 
                  addToOrder={this.addToOrder}
               />
            </div>
            <Footer />
         </div>
      )
   }

}

export default App;
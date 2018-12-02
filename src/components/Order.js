import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
   render() {
      let totalPrice = 0;

      const orderedBooks = this.props.order.map( order => {
         totalPrice += parseFloat(order.price);
         return (
            <OrderView
               key={order.name}
               book={order} 
               removeFromOrder={this.props.removeFromOrder}
            />
         )
      });

      const ulCss = {
         listStyle: "none"
      };

      return (
         <ul className="order col-md-5" style={ulCss}>
            <h2>Your Order</h2>
            { orderedBooks }
            <h4>Total price: {totalPrice}$</h4>
         </ul>
      )
   }
}

export default Order;
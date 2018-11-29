import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
   render() {

      const orderedBooks = this.props.order.map( order => {
         return <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>
      });

      const ulCss = {
         listStyle: "none"
      };

      return (
         <ul className="order col-md-5" style={ulCss}>
            <h2>Your Order</h2>
            { orderedBooks }
         </ul>
      )
   }
}

export default Order;
import React from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {

   render() {
      return (
         <div>
            <Header />
            <Order />
            <Inventory />
            <AdminPanel />
         </div>
      )
   }

}

export default App;
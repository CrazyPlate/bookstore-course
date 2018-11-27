import React from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css';

class App extends React.Component {

   render() {
      return (
         <div className="app container">
            <Header />
            <div className="row">
               <Order />
               <Inventory />
               <AdminPanel />
            </div>
         </div>
      )
   }

}

export default App;
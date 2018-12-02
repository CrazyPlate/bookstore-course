import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
   render() {
      return (
         <div className="row header" >
            <h1>BookStore</h1>
            <Link to="/admin" ><button className="btn btn-info rightBtn">Admin Panel</button></Link>
         </div>
      )
   }
}

export default Header;
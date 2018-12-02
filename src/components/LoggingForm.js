import React from 'react';
import { firebaseApp } from '../fbase';

class LoggingForm extends React.Component {

   constructor() {
      super();
      this.state = {
         email: "",
         password: ""
      }
   }

   authenticate = (evt) => {
      evt.preventDefault();
      firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
         .then( () => {
            localStorage.setItem("loggedIn", true);
            this.props.changeLoggedIn(localStorage.getItem("loggedIn"));
         })
         .catch( () => {
            console.log("Unable to authenticate");
         }) 
   }

   handleLoginChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value
      })
   }

   render() {
      return (
         <div className="col-md-3 loginPanel">
            <form onSubmit={this.authenticate}>
               <div className="form-group">
                  <input
                     type="text"
                     placeholder="e-mail"
                     id="email"
                     name="email"
                     className="form-control"
                     onChange={this.handleLoginChange}
                     value={this.state.email}
                  />
               </div>
               <div className="form-group">
                  <input
                     type="password"
                     id="password"
                     name="password"
                     className="form-control"
                     onChange={this.handleLoginChange}
                     value={this.state.password}
                  />
               </div>
               <button type="submit" className="btn btn-primary rightBtn">Log In</button>
            </form>
         </div>
      )
   }
}

export default LoggingForm;
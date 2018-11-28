import React from 'react';

class Header extends React.Component {

   constructor() {
      super();
      this.state = {
         bookstoreName: "Black books",
         clicked: true,
         textColor: "white",
         backgroungColor: "black"
      }
   }

   handleClick = () => {
      if (this.state.clicked) {
         this.setState({
            bookstoreName: "White books",
            textColor: "black",
            backgroungColor: "white"
         })
      } else {
         this.setState({
            bookstoreName: "Black books",
            textColor: "white",
            backgroungColor: "black"
         })
      }
      this.setState({
         clicked: !this.state.clicked
      })
   }

   render() {

      let headerCss = {
         color: this.state.textColor,
         backgroundColor: this.state.backgroungColor
      }

      return (
         <div className="row header" style={headerCss} onClick={this.handleClick} >
            <h1>{this.state.bookstoreName}</h1>
         </div>
      )
   }
}

export default Header;
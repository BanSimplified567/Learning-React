import React from "react";

export class Cars extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         brand: 'Ford',
         model: 'Mustang',
         color: 'red',
      };
   }
   render() {
      return (
         <div>
            <h1>My {this.state.brand}</h1>
            <p>
               It is a {this.state.color} {this.state.model} from {this.state.year}.
            </p>
         </div>
      );
   }
}

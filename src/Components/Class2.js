// import "../styles.css";
// import { Component } from "react";
// import { Link } from "react-router-dom";
// import Forma from "../slike/forma.jpg";
// import React, { useState, useRef, useEffect, useContext } from "react";

// export class Class extends Component {
//   state = {
//     ime: "",
//     prezime: ""
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     console.log("Forma je potvrdena", this.state.ime);
//   };

//   render() {
//     return (
//       <div>
//         <h2>
//           Pozdrav {this.state.ime} {this.state.prezime}! Nadamo se da ste
//           naućili nešto novo u velikom svijetu glazbe.
//         </h2>
//         <form>
//           <input
//             placeholder="ime"
//             value={this.state.ime}
//             onChange={(e) => this.setState({ ime: e.target.value })}
//           />
//           <input
//             placeholder="prezime"
//             value={this.state.prezime}
//             onChange={(e) => this.setState({ prezime: e.target.value })}
//           />
//           <button onClick={() => this.onSubmit()}>Submit</button>
//         </form>
//         <h2>
//           <Link to="/">Vrati me na naslovnu</Link>
//         </h2>
//         <img src={Forma} alt="" />
//       </div>
//     );
//   }
// }

// export default Class;

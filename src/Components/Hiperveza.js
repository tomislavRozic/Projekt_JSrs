import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hiperveza extends Component {
  render() {
    return (
      <div>
        <Link to="/" class="link">
          Povratak na naslovnu stranicu
        </Link>
        <br />
      </div>
    );
  }
}

export default Hiperveza;

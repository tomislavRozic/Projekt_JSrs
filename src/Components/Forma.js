import React, { Component } from "react";

export class Forma extends Component {
  state = {
    ime: "",
    prezime: "",
    lozinka: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Forma je potvrđena", this.state.ime);
  };
  render() {
    return (
      <div>
        <h1 className="h_f">
          Unesi podatke ako želiš dobivati obavijesti kada Paulo Coelho izbaci
          novu knjigu.
        </h1>
        <h3>Moje ime je {this.state.ime}</h3>
        <form>
          <input
            placeholder="ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <input
            placeholder="prezime"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />
          <input
            placeholder="lozinka"
            value={this.state.lozinka}
            onChange={(e) => this.setState({ lozinka: e.target.value })}
          />
          <button onClick={(e) => this.onSubmit(e)}> Potvrdi </button>
        </form>
      </div>
    );
  }
}

export default Forma;

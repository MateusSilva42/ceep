import React, { Component } from "react";

class ListNotes extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>
            <section>
              <header>
                <h3>Título da nota</h3>
              </header>
              <p>Texto da sua nota...</p>
            </section>
          </li>
        </ul>
        <ul>
          <li>
            <section>
              <header>
                <h3>Título da nota</h3>
              </header>
              <p>Texto da sua nota...</p>
            </section>
          </li>
        </ul>
        <ul>
          <li>
            <section>
              <header>
                <h3>Título da nota</h3>
              </header>
              <p>Texto da sua nota...</p>
            </section>
          </li>
        </ul>
      </section>
    );
  }
}

export default ListNotes;

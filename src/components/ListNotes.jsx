import React, { Component } from "react";
import Note from "./Note";

class ListNotes extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>
            <Note />
          </li>
        </ul>
        <ul>
          <li>
            <Note />
          </li>
        </ul>
        <ul>
          <li>
            <Note />
          </li>
        </ul>
      </section>
    );
  }
}

export default ListNotes;

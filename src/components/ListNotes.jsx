import React, { Component } from "react";
import Note from "./Note";

class ListNotes extends Component {
  render() {
    return (
      <section>
        <ul>
            {Array.of("Trabalho", "Trabalho", "Estudos").map(Categoria =>{
                return(
                    <li>
                    <h5>{Categoria}</h5>
                    <Note />
                  </li>
                );
            })}
        
        </ul>
      </section>
    );
  }
}

export default ListNotes;

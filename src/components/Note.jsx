import React, { Component } from "react"

class Note extends Component{
    render(){
        return(
            <section>
            <header>
              <h3>Título da nota</h3>
            </header>
            <p>Texto da sua nota...</p>
          </section>
        );
    }
}

export default Note;
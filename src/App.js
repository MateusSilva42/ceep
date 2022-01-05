import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import CreateNoteForm from "./components/CreateNoteForm";

class App extends Component {
  render() {
    return (
      <section>
        <CreateNoteForm />
        <ListNotes />
      </section>
    );
  }
}

export default App;

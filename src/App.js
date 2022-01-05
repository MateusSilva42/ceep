import ListNotes from "./components/ListNotes";

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
      <ListNotes/>
    </section>
  );
}

export default App;

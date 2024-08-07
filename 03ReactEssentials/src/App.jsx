import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";

function CoreConcepts() {
  return CORE_CONCEPTS.map((concept) => (
    <CoreConcept concept={concept} key={concept.title} />
  ));
}

function CoreConcept({ concept }) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

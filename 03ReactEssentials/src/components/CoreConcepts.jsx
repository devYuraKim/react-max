import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
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

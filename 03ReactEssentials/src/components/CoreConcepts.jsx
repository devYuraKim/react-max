import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return CORE_CONCEPTS.map((concept) => (
    <CoreConcept {...concept} key={concept.title} />
  ));
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

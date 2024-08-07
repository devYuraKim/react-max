import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState("Please click a button");

  function handleClick(input) {
    setTabContent(input);
    console.log(input);

    // == resolve setState lagging problem by directly capturing value
    // const newTabContent = input;
    // setTabContent(newTabContent);
    // console.log(input);
  }

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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleClick}>Components</TabButton>
            <TabButton onClick={handleClick}>JSX</TabButton>
            <TabButton onClick={handleClick}>Props</TabButton>
            <TabButton onClick={handleClick}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

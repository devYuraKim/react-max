import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState("Please click a button");

  function handleClick(input) {
    setTabContent(EXAMPLES[input].description);

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
            <TabButton onClick={handleClick}>components</TabButton>
            <TabButton onClick={handleClick}>jsx</TabButton>
            <TabButton onClick={handleClick}>props</TabButton>
            <TabButton onClick={handleClick}>state</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

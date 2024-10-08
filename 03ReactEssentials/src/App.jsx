import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState("");

  function handleClick(input) {
    setTabContent(input);

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
            <TabButton
              onClick={handleClick}
              buttonClicked={tabContent === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={handleClick}
              buttonClicked={tabContent === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={handleClick}
              buttonClicked={tabContent === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={handleClick}
              buttonClicked={tabContent === "state"}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!tabContent ? (
              <p>Please select a topic</p>
            ) : (
              <>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>{EXAMPLES[tabContent].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

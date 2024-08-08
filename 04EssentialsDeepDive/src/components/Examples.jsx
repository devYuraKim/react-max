import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  function handleClick(input) {
    setTabContent(input);

    // == resolve setState lagging problem by directly capturing value
    // const newTabContent = input;
    // setTabContent(newTabContent);
    // console.log(input);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
      <menu></menu>
    </Section>
  );
}

import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState(undefined);
  const playerName = useRef();

  const filePicker = useRef();
  const [fileName, setFileName] = useState("");

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  function handleClickFilePicker() {
    filePicker.current.click();
  }

  function handleFilePickerChange(e) {
    setFileName(e.target.files[0].name);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>

      <input
        type="file"
        accept="image/*"
        ref={filePicker}
        onChange={handleFilePickerChange}
      />
      <input type="text" readOnly={true} value={fileName} />
      <button onClick={handleClickFilePicker}>Pick Image</button>
    </section>
  );
}

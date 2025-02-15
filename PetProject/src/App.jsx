import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyButton from "./components/UI/MyButton/MyButton";
import "./App.css";
import MyJournalItem from "./components/UI/MyJournalItem/MyJournalItem";

function App() {
  return (
    <>
      <h1>WaQ</h1>
      <p>Yes</p>
      <MyButton></MyButton>
      <MyJournalItem />
    </>
  );
}

export default App;

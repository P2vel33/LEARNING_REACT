import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyButton from "./components/UI/MyButton/MyButton";
import "./App.css";
import MyJournalItem from "./components/UI/MyJournalItem/MyJournalItem";

function App() {
  const data = [
    {
      title: "First",
      text: "1",
      date: new Date(),
    },
    {
      title: "Second",
      text: "2",
      date: new Date(),
    },
  ];

  return (
    <>
      <h1>WaQ</h1>
      <p>Yes</p>
      <MyButton></MyButton>
      <MyJournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <MyJournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </>
  );
}

export default App;

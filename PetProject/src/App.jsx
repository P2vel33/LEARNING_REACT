import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyButton from "./components/UI/MyButton/MyButton";
import "./App.css";
import MyJournalItem from "./components/UI/MyJournalItem/MyJournalItem";
import MyCardButton from "./components/UI/MyCardButton/MyCardButton ";
import MyLeftPanel from "./layouts/MyLeftPanel/MyLeftPanel";
import MyBody from "./layouts/MyBody/MyBody";
import MyHeader from "./components/UI/MyHeader/MyHeader";
import MyJournalList from "./components/UI/MyJournalList/MyJournalList";
import MyJournalAddButton from "./components/UI/MyJournalAddButton/MyJournalAddButton";

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
    <div className="app">
      <MyLeftPanel>
        <MyHeader />
        <MyJournalAddButton />
        <MyJournalList>
          <MyCardButton>
            <MyJournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </MyCardButton>

          <MyCardButton>
            <MyJournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </MyCardButton>
        </MyJournalList>
      </MyLeftPanel>
      <MyBody>Body</MyBody>
      <h1>WaQ</h1>
      <p>Yes</p>
      <MyButton></MyButton>
      <MyCardButton>A new memory</MyCardButton>
    </div>
  );
}

export default App;

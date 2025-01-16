import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "This is memo 1",
      createdAt: 1736757559195,
      updatedAt: 1736757559195,
    },
    {
      title: "Memo 2",
      content: "This is memo 2",
      createdAt: 1736757559195,
      updatedAt: 1736757559195,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: now,
        updatedAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (selectedMemoIndex && selectedMemoIndex === newMemos.length) {
      setSelectedMemoIndex(selectedMemoIndex - 1);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { getItem, setItem } from './lib/storage';
// import debounce from 'lodash.debounce';
import _ from 'lodash';

const debouncedSetItem = _.debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem("memo") || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
	debouncedSetItem("memo", newMemos);
};

const addMemo = () => {
	const now = new Date().getTime();
	const newMemos = [
		...memos,
		{
			title: "Untitled",
			content: "",
			createdAt: now,
			updatedAt: now,
		},
    ];
    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);
	debouncedSetItem("memo", newMemos);
};

const deleteMemo = (index) => {
	const newMemos = [...memos];
	
    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (selectedMemoIndex && selectedMemoIndex === newMemos.length) {
		setSelectedMemoIndex(selectedMemoIndex - 1);
    }
	debouncedSetItem("memo", newMemos);
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

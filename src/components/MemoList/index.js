import MemoItem from "../MemoItem";
import "./index.css";

function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          title={memo.title}
          onClickItem={() => {
            setSelectedMemoIndex(() => index);
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={index === selectedMemoIndex}
        />
      ))}
    </div>
  );
}

export default MemoList;

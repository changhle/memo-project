import "./index.css";

function MemoItem({ title, onClickItem, onClickDelete, isSelected }) {
  // console.log(title);
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      {title}
      <button className="DeleteButton" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
}

export default MemoItem;

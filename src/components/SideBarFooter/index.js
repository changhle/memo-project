import "./index.css";

function SideBarFooter({ onClick }) {
  return (
    <div className="SideBarFooter">
      <button className="AddButton" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default SideBarFooter;

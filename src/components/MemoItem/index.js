import './index.css';

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  return (
    <div>
      <div
        className={'MemoItem' + (isSelected ? ' selected' : '')}
        onClick={onClickItem}
      >
        <span>{children}</span>
        <button className="MemoItem_delete-button" onClick={onClickDelete}>
          X
        </button>
      </div>
    </div>
  );
}

export default MemoItem;

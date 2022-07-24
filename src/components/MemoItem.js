function MemoItem({ children, onClick, isSelected }) {
  return (
    <div>
      <div
        className={'MemoItem' + (isSelected ? ' selected' : '')}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}

export default MemoItem;

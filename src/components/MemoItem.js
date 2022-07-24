function MemoItem({ children, onClick }) {
  return (
    <div>
      <div className="MemoItem" onClick={onClick}>
        {children}
      </div>
    </div>
  );
}

export default MemoItem;

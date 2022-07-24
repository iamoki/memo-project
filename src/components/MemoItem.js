function MemoItem({ children, onClick }) {
  return (
    <div>
      <div onClick={onClick}>{children}</div>
    </div>
  );
}

export default MemoItem;

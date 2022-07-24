import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';

function SideBar({ memos, setSelectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList memos={memos} setSelectedMemoIndex={setSelectedMemoIndex} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;

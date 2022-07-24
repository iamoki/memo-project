import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  // 메모 리스트
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is Memo 1',
      createdAt: 1658651088625,
      updatedAt: 1658651088625,
    },
    {
      title: 'Memo 2',
      content: 'This is Memo 2',
      createdAt: 1658651109922,
      updatedAt: 1658651109922,
    },
  ]);

  // 어떤 메모를 선택했는지 해당 메모의 인덱스값을 상태로 보존
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  // 메모내용 수정하기
  const setMemo = (newMemo) => {
    // 불변성 유지를 위해 미리 memos를 카피 후 그안에 newMemo를 삽입
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  // 메모 추가하기
  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ]);
    // 방금 생성한 메모가 선택되게끔 memos의 인덱스 마지막값 가져오기
    setSelectedMemoIndex(memos.length);
  };

  // 메모 삭제하기
  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);

    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;

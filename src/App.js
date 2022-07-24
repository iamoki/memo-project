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

  const setMemo = (newMemo) => {
    // 불변성 유지를 위해 미리 memos를 카피 후 그안에 newMemo를 삽입
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;

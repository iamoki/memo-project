import { useCallback, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

// 로컬스토리지에 입력될때마다 저장되지않도록 5초의 딜레이를 걸어 저장 성능 최적화
const debouncedSetItem = debounce(setItem, 5000);

function App() {
  // 메모 리스트
  const [memos, setMemos] = useState(getItem('memo') || []);

  // 어떤 메모를 선택했는지 해당 메모의 인덱스값을 상태로 보존
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  // 메모내용 수정하기
  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        // 불변성 유지를 위해 미리 memos를 카피 후 그안에 newMemo를 삽입
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex],
  );

  // 메모 추가하기
  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: now,
          updatedAt: now,
        },
      ];

      debouncedSetItem('memo', newMemos);

      return newMemos;
    });
    // 방금 생성한 메모가 선택되게끔 memos의 인덱스 마지막값 가져오기
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  // 메모 삭제하기
  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);

        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

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

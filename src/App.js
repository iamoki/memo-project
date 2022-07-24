import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
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
  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;

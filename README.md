# 메모장 프로젝트및 설계 🛠

## 1. 설계 및 기본 컴포넌트 구현

- 좌측 사이드바에서는 현재 등록된 메모의 목록이, 오른쪽 메모 편집 영역에서는 제목과 내용을 수정할수 있는 입력 폼.

## 2. 메모 수정 및 선택 기능 구현

- 사이드바에서 선택한 메모를 오른쪽 편집 영역에서 확인하고 수정가능
- 수정된 내용은 다른 메도로 이동하더라도 보존

## 3. 메모 추가 기능 구현

- 사이드바의 최하단에는 새로운 메모를 추가할 수 있는 버튼
- 새로운 메모를 추가하면 초기 제목은 "Untitled"로 설정되며, 내용은 비어있음
- 새로운 메모를 추가시, 해당 메모가 자동으로 선택됨

## 4. 메모 삭제 기능 구현

- 사이드바의 각 메모제목 오른쪽에는 해당 메모를 삭제할 수 있는 X 버튼이 있음
- X 버튼을 클릭 시, 해당 메모는 삭제되며, 해당 메모를 선택한 상태라면 가장 첫 번째 메모로 선택이 변경

## 5. 메모 저장 기능 구현

- 브라우저를 닫거나 다시열어도 편집한 메모가 유지되도록 localStorage 사용

---

## src 폴더구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂MemoContainer
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂MemoItem
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂MemoList
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SideBar
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SideBarFooter
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂SideBarHeader
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.js
 ┣ 📂lib
 ┃ ┗ 📜storage.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

---

## 사용 라이브러리

### 🪛 **lodash**

```javascript
import debounce from 'lodash.debounce';

// 로컬스토리지에 입력될때마다 저장되지않도록 5초의 딜레이를 걸어 저장 성능 최적화
const debouncedSetItem = debounce(setItem, 5000);
```

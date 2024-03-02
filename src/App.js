import Button from "./Button";
import styles from "./xxx.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API.....");
  }, []); //한번만 실행됨
  useEffect(() => {
    console.log("Serch for", keyword);
  }, [keyword]); //keyword가 변화할 때 실행됨 <- dependencies 리액트가 지켜봐야 하는 것들

  //modify 함수의 파라미터는 무조건 current이다.

  // function onClick() {
  //   setValue(function(prev) {
  //     return prev + 1;
  //   });
  // }

  // useState의 상태 업데이트 함수(여기서는 setValue로 명명됨)에 전달하는 콜백 함수의 파라미터는 현재 상태의 가장 최신 값을 나타냅니다.
  // 이 매개변수를 종종 current 또는 prev라고 명명하는데, 이는 상태 업데이트 함수가 호출될 당시의 현재 상태 값을 참조한다는 의미입니다.
  // React 문서에서는 이러한 패턴을 "함수형 업데이트(functional updates)"라고 부르며, 주로 이전 상태에 기반하여 새 상태를 계산해야 할 때 사용합니다.
  // 이 방법은 상태 업데이트가 비동기적으로 발생하고 여러 업데이트가 서로를 덮어쓸 수 있는 상황에서 이전 상태를 안전하게 참조할 수 있게 해줍니다.
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

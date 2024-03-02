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
  }, []); //�ѹ��� �����
  useEffect(() => {
    console.log("Serch for", keyword);
  }, [keyword]); //keyword�� ��ȭ�� �� ����� <- dependencies ����Ʈ�� ���Ѻ��� �ϴ� �͵�

  //modify �Լ��� �Ķ���ʹ� ������ current�̴�.

  // function onClick() {
  //   setValue(function(prev) {
  //     return prev + 1;
  //   });
  // }

  // useState�� ���� ������Ʈ �Լ�(���⼭�� setValue�� ����)�� �����ϴ� �ݹ� �Լ��� �Ķ���ʹ� ���� ������ ���� �ֽ� ���� ��Ÿ���ϴ�.
  // �� �Ű������� ���� current �Ǵ� prev��� ����ϴµ�, �̴� ���� ������Ʈ �Լ��� ȣ��� ����� ���� ���� ���� �����Ѵٴ� �ǹ��Դϴ�.
  // React ���������� �̷��� ������ "�Լ��� ������Ʈ(functional updates)"��� �θ���, �ַ� ���� ���¿� ����Ͽ� �� ���¸� ����ؾ� �� �� ����մϴ�.
  // �� ����� ���� ������Ʈ�� �񵿱������� �߻��ϰ� ���� ������Ʈ�� ���θ� ��� �� �ִ� ��Ȳ���� ���� ���¸� �����ϰ� ������ �� �ְ� ���ݴϴ�.
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

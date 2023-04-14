import { Checkbox } from "antd";
import { useEffect, useRef, useState } from "react";
import UpdateModal from "./components/update-modal";

const Todo = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<string[]>([]);

  const onSubmitTodo = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (input === null || input === "") {
      return;
    }
    setInputs((prev) => [...prev, input]);
    console.log(inputs);
    setInput("");
    inputRef.current?.focus();
  };

  const onCheckClick = (i: number) => {
    console.log(i);
    setInputs((inputs) => inputs.filter((input) => input !== inputs[i]));
  };

  return (
    <>
      <div className="mx-auto w-[1200px] pt-4">
        <div>
          <span>Todo List</span>
        </div>
        <form onSubmit={onSubmitTodo}>
          <div>
            <input
              ref={inputRef}
              placeholder="30자 이내로 입력하세요"
              className="w-[300px] border-[1px]"
              maxLength={30}
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button className="border-[1px]">입력</button>
          </div>
          <div>
            {inputs.map((v, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 pt-2"
                  >
                    <button onClick={() => onCheckClick(i)}>삭제</button>
                    <UpdateModal
                      todo={v}
                      id={i}
                      setInputs={setInputs}
                      inputs={inputs}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
};
export default Todo;

import { CodeEditor } from "../../shared/api/components/CodeEditor/";
import { CodeSubmit } from "../../features/CodeSubmit";
import { useState } from "react";
import "./style.css";

export function BattleWidget() {
  const [firstPlayerCode, setFirstPlayerCode] = useState(
    "console.log('hello world!');"
  );

  //здесь будет отображаться код противника, тоже видимо state обновлять через сервис
  const [secondPlayerCode, setSecondPlayerCode] = useState("");

  //тут по идее должен вызываться сервис отправки кода, например так:
  function handleCodeSubmit() {
    console.log(firstPlayerCode);
  }

  return (
    <div className="container">
      <div className="code-editor-container">
        <CodeEditor value={firstPlayerCode} setValue={setFirstPlayerCode} />
        <CodeEditor
          value={secondPlayerCode}
          setValue={setSecondPlayerCode}
          readOnly
        />
      </div>
      <CodeSubmit handleClick={handleCodeSubmit} />
    </div>
  );
}

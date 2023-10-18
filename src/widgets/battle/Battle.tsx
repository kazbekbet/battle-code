import { CodeEditor } from "../../shared/api/components/CodeEditor/CodeEditor";
import { CodeSubmit } from "../../features/CodeSubmit";
import './style.css'

export function Battle() {
  return (
    <>
    <div className="code-editor-container">
      <CodeEditor />
      <CodeEditor readOnly />
    </div>
    <CodeSubmit />
    </>
  )
}
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';
import './style.css'

function CodeEditor() {
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = (val: string) => {
    console.log('val:', val);
    setValue(val);
  };

  console.log(value)
  return <CodeMirror value={value} className='code' theme={darcula} extensions={[javascript({ jsx: true })]} onChange={onChange} />;
}

export default CodeEditor;
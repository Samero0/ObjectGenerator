import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { EditorState } from "@codemirror/state";

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      height="270px"
      width="700px"
      extensions={[
        html(),
        EditorState.tabSize.of(2), // Establece el tamaño de tabulación en 2 espacios
      ]}
      onChange={onChange}
      theme="light"
      basicSetup={true} // Usa la configuración básica
    />
  );
};

export default HtmlEditor;

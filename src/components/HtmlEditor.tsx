import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

interface HtmlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

// codemirror custom theme definition
const noGutterTheme = EditorView.theme({
  "&": {
    color: "#333",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #000",
    padding: "10px",
  },
  ".cm-content": {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "13px",
    paddingLeft: "0px !important", //no lateral bar
  },
  ".cm-gutters": { 
    display: "none !important" //no lateral bar
  }
}, { dark: false });

const HtmlEditor: React.FC<HtmlEditorProps> = ({ value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      height="270px"
      width="700px"
      extensions={[
        html(),
        EditorState.tabSize.of(2),
        noGutterTheme, // custom theme
      ]}
      onChange={onChange}
      basicSetup={{ lineNumbers: false }} 
    />
  );
};

export default HtmlEditor;

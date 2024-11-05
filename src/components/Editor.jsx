import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as CodeEditor } from "react-codemirror2";

function Editor({ name, lang, value, setValue }) {
  function handleChange(editor, data, value) {
    setValue(value);
  }

  return (
    <div className=" flex flex-col justify-center grow basis-1 h-full overflow-y-auto">
      <h1 className=" bg-white/25 text-white text-lg font-semibold px-4 py-1 rounded-t-lg select-none">
        {name}
      </h1>
      <div className=" rounded-b-lg overflow-hidden bg-pink-500">
        <CodeEditor
          onBeforeChange={handleChange}
          value={value}
          className=" h-full cursor-text"
          options={{
            lineWrapping: true,
            mode: lang,
            lint: true,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  );
}

export default Editor;

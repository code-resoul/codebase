import React from "react";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";
import { useState, useEffect } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const editors = [
    { name: "HTML", lang: "xml", value: html, setValue: setHtml },
    { name: "CSS", lang: "css", value: css, setValue: setCss },
    { name: "JavaScript", lang: "javascript", value: js, setValue: setJs },
  ];

  useEffect(() => {
    setSrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`);
  }, [html, css, js]);

  return (
    <div className=" bg-black/90 relative">
      <div className=" flex gap-3 p-5 h-[50vh]">
        {editors.map((editor, index) => (
          <Editor
            key={index}
            name={editor.name}
            lang={editor.lang}
            value={editor.value}
            setValue={editor.setValue}
          />
        ))}
      </div>
      <div className=" w-full h-[50vh] pb-5 px-5">
        <Viewer srcDoc={srcDoc} />
      </div>
    </div>
  );
}

export default App;

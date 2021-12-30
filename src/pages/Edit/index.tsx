import React, { useEffect, useState } from "react";
import {
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import { blockStyleFn, editStyleFn, myBlockRender } from "./const";
import "./index.less";
import ToolsBox from "./components/ToolsBox";

function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (editorState: React.SetStateAction<EditorState>) => {
    setEditorState(editorState);
  };

  // 避免键盘删除不了entity
  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  useEffect(() => {
    console.log("editorState", convertToRaw(editorState.getCurrentContent()));
    convertFromRaw(convertToRaw(editorState.getCurrentContent()));
  }, [editorState]);

  return (
    <div>
      <ToolsBox editorState={editorState} setEditorState={setEditorState} />
      <div style={{ height: "800px", overflowY: "auto" }}>
        <Editor
          editorState={editorState} // 原始数据
          onChange={onChange}
          handleKeyCommand={handleKeyCommand} // 键盘事件
          placeholder="请输入文本"
          customStyleFn={editStyleFn}
          blockStyleFn={blockStyleFn} // 块级样式处理
          blockRendererFn={myBlockRender} // 自定义块级
        />
      </div>
    </div>
  );
}

export default MyEditor;

import { Button, Popover, Select } from "antd";
import {
  AtomicBlockUtils,
  DraftEntityMutability,
  EditorState,
  RichUtils,
} from "draft-js";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { FontColorsOutlined } from "@ant-design/icons";
import "./index.less";
import { BlockStyleMap } from "../../const";

interface Props {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
}

interface CreateEntityType<T> {
  type: string;
  mutability: DraftEntityMutability;
  data: T;
}
export default function ToolComponent(props: Props) {
  const { editorState, setEditorState } = props;

  const [color, setColor] = useState("#000000");
  const handleChangeInlineStyle = (style: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    setEditorState(newState);
  };
  const handleChangeBlockType = (type: string) => {
    const newState = RichUtils.toggleBlockType(editorState, type);
    setEditorState(newState);
  };

  const handleCreateEntity = (createEntity: CreateEntityType<any>) => {
    const { type, mutability, data } = createEntity;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      type,
      mutability,
      data
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    const newState = AtomicBlockUtils.insertAtomicBlock(
      newEditorState,
      entityKey,
      "&nbsp"
    );
    setEditorState(newState);
  };

  return (
    <div>
      <Button onClick={() => setEditorState(EditorState.undo(editorState))}>
        &lt;
      </Button>
      <Button onClick={() => setEditorState(EditorState.redo(editorState))}>
        &gt;
      </Button>
      <br />
      <Button onClick={() => handleChangeInlineStyle("BOLD")}>B</Button>
      <Popover
        overlayClassName="popover"
        content={
          <SketchPicker
            color={color}
            onChange={(res) => {
              setColor(res.hex);
              handleChangeInlineStyle(res.hex);
            }}
          />
        }
      >
        <Button onClick={() => handleChangeInlineStyle(color)}>
          <FontColorsOutlined style={{ color: color }} />
        </Button>
      </Popover>
      <br />
      <Select
        defaultValue="header-one"
        onChange={(value) => handleChangeBlockType(value)}
      >
        {BlockStyleMap.map((item) => (
          <Select.Option key={item.key}> {item.value}</Select.Option>
        ))}
      </Select>
      <Button onClick={() => handleChangeBlockType("green")}>自定义样式</Button>
      <br />
      <Button
        onClick={() =>
          handleCreateEntity({
            type: "IMAGE",
            mutability: "IMMUTABLE",
            data: {
              src: "http://www.dnzhuti.com/uploads/allimg/171113/95-1G113150956.jpg",
            },
          })
        }
      >
        图片
      </Button>
      <Button
        onClick={() =>
          handleCreateEntity({
            type: "LINK",
            mutability: "MUTABLE",
            data: {
              text: "LINK",
              href: "https://www.wanmeizy.com/uploads/ueditor/upload/image/20190513/155771589064749921.jpg",
            },
          })
        }
      >
        超链接
      </Button>
    </div>
  );
}

import React from "react";
import { Image } from "antd";
import { ContentBlock, ContentState } from "draft-js";
interface Props {
  contentState: ContentState;
  block: ContentBlock;
}
export default function MediaComponent(props: Props) {
  const { contentState, block } = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src } = entity.getData(); // 取出图片的地址
  const { text, href } = entity.getData(); // 取出图片的地址
  const type = entity.getType(); // 判断 entity 的 type 的
  let result: null | JSX.Element = null;
  if (type == "IMAGE") {
    result = (
      <div>
        <Image src={src} width={200} />
      </div>
    );
  }
  if (type == "LINK") {
    result = (
      <div>
        <a href={href}>{text}</a>
      </div>
    );
  }
  return result;
}

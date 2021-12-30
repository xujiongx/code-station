import { ContentBlock, DraftInlineStyle } from "draft-js";
import MediaComponent from "./components/MediaComponent";

export const editStyleFn = (style: DraftInlineStyle, block: ContentBlock) => {
  let result = {};
  console.log(445566, style, block);
  style.forEach((type) => {
    if (type?.startsWith("#")) {
      result = { color: type };
    }
    if (type === "BOLD") {
      result = {
        color: "red",
        fontSize: "100px",
      };
    }
  });

  return result;
};

export const blockStyleFn = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
  if (type === "blockquote") {
    return "superFancyBlockquote";
  }
  if (type === "green") {
    return "superFancygreen";
  }
  return "";
};

export function myBlockRender(contentBlock: ContentBlock) {
  const type = contentBlock.getType();
  if (type === "atomic") {
    return {
      component: MediaComponent,
      editable: false,
      props: {
        foo: "bar",
      },
    };
  }
}

export const BlockStyleMap = [
  {
    key: "header-one",
    value: "H1",
  },
  { key: "header-two", value: "H2" },
  { key: "header-three", value: "H3" },
  { key: "header-four", value: "H4" },
  { key: "header-five", value: "H5" },
  { key: "header-six", value: "H6" },
  { key: "blockquote", value: "BQ" },
  { key: "pre", value: "code-block" },
  { key: "figure", value: "atomic" },
  { key: "unordered-list-item", value: "ul" },
  { key: "ordered-list-item", value: "li" },
  { key: "unstyled", value: "div" },
];

import React from "react";
import styled from "styled-components";

interface IconProps {
  type: string;
  style: any;
}
const Icon = styled.svg`
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`;

export function IconFont(props: IconProps) {
  const { type, style } = props;
  return (
    <Icon style={style} aria-hidden="true">
      <use xlinkHref={`#icon-${type}`}></use>
    </Icon>
  );
}

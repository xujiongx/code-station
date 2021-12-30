import styled from "styled-components";

export const SelectAvatarLayout = styled.div`
  width: 1200px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const Item = styled.div`
  flex: 0 0 25%;
  text-align: center;
  background-color: ${(props: { choose?: boolean }) =>
    props.choose ? "palevioletred" : ""};
`;

export const NineLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
`;

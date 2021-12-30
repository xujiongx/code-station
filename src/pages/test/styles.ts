import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #ccc;
`;
export const Image = styled.img`
  height: 200px;
`;

export const Item = styled.div`
  flex: 0 0 25%;
  text-align: center;
`;

export const NineLayout = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  //   div${Item} {
  //     flex: 0 0 25%;
  //   }
`;

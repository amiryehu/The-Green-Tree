import styled from "styled-components";

export const TreesArea = styled.div`
  display: flex;
`;

export const TreeStyle = styled.div<{ iamgeUrl: string }>`
  height: 50px;
  width: 50px;

  background-image: url(iamgeUrl);
`;

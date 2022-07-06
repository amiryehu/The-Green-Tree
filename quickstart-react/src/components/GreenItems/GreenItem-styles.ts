import styled from "styled-components";
import backgroundImage from "../../image/mondayBackground2.png";

export const DataContainer = styled.div`
  /* width: 100%; */
  /* min-width: 500px; */
  /* height: 100vh; */
  /* min-height: 370px; */
  height: 400px;
  width: 600px;
  padding-left: 55px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 15px;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  align-items: center;
  border: 1px solid gray;
  border-radius: 16px;
  color: black;
`;

export const Row = styled.div`
  color: #3c96fb;
  font-size: 24px;
  font-weight: 400;
`;
export const SuccessMessage = styled.div`
  color: #3c96fb;
  font-size: 48px;
  font-weight: 800;
`;

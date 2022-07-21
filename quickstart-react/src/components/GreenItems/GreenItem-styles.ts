import styled from "styled-components";
import backgroundImage from "../../image/mondayBackground2.png";
import "@fontsource/poppins";
export const DataContainer = styled.div`
  /* @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap"); */
  /* width: 100%; */
  /* height: 100vh; */
  /* min-height: 370px;
  min-width: 500px; */
  height: 500px;
  width: 650px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  padding-top: 15px;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  align-items: center;
  /* border: 1px solid gray; */
  /* border-radius: 16px; */
  color: black;
  font-family: "poppins"; //download
`;

export const Row = styled.div`
  color: #3c96fb;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;
export const SuccessMessage = styled.div`
  color: #3c96fb;
  font-family: "Poppins";
  font-size: 28px;
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

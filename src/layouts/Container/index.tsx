import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => `rgb(${props.color})`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: background-color 2s ease-in-out;
`;

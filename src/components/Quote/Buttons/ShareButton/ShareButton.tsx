import styled from "styled-components";

const ShareButton = styled.button`
  background-color: ${(props) => `rgb(${props.color})`};
  padding: 10px;
  border-radius: 3px;
  color: rgba(255, 255, 255, 1);
  border: none;
  align-self: flex-end;
  cursor: pointer;
  transition: background-color 2s;
  &:hover {
    opacity: 0.9;
  }
`;

export default ShareButton;

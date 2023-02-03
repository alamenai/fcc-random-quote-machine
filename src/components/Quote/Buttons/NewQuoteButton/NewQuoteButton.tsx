import styled from "styled-components";

const NewQuoteButton = styled.button`
  background-color: ${(props) => `rgb(${props.color})`};
  padding: 10px 16px 10px;
  border-radius: 3px;
  color: rgba(255, 255, 255, 1);
  border: none;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 2s;
  &:hover {
    opacity: 0.9;
  }
`;
export default NewQuoteButton;

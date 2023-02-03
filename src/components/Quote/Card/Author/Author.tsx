import styled from "styled-components";

const StyledAuthor = styled.p`
  color: ${(props) => `rgb(${props.color})`};
  font-size: 18px;
  font-weight: 300;
  align-self: flex-end;
  margin-top: 24px;
  transition: color 2s ease-in-out;

  &::before {
    content: "- ";
  }
`;
export default StyledAuthor;

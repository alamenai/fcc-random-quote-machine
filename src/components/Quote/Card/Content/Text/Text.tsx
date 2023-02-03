import styled from "styled-components";

const StyledText = styled.p`
  color: ${(props) => `rgb(${props.color})`};
  font-size: 28px;
  max-width: 400px;
  text-align: justify;
  line-height: 36px;
  margin: 0;
  padding-left: 12px;
  transition: color 2s ease-in-out;
  animation: fadeIn 5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default StyledText;

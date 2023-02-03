import StyledAuthor from "./Author";

interface IProps {
  author: string;
  color: string;
}
export const Author = ({ author, color }: IProps) => {
  return (
    <StyledAuthor color={color} id='author'>
      {author}
    </StyledAuthor>
  );
};

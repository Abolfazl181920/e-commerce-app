import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: #c7b0ff;
  color: #603cb7;
  padding: 10px 5px;
  transition: 0.4s;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background-color: #603cb7;
    color: #fff;
  }
`;

const GoToProductLink = (props) => {
  const { to, text } = props;

  return <StyledLink to={to}>{text}</StyledLink>;
};

export default GoToProductLink;
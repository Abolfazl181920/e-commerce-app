import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Palette Mosaic", cursive;
  font-size: 32px;
  color: #000;
  margin-top: -10px;
`;

//a component to display the nav title
const NavTitle = (props) => {
  const { title } = props;

  return (
    <Title>
      <Link to="/">
        {title}
      </Link>
    </Title>
  );
};

export default NavTitle;

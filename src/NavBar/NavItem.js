import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import styles from "./link.module.css";

const Li = styled.li`
  margin-left: 30px;
  @media (max-width: 767px) {
    margin-top: 10px;
    margin-left: 0;
    min-width: 180px;
  }
`;

//a component for nav items
const NavItem = (props) => {
  //ut gets the props: path to select the href of link, text to select the displayed text
  const { path, text } = props;
  const location = useLocation();

  return (
    <Li>
      <Link
        to={path}
        className={
          "/" + location.hash === path || location.pathname === path
            ? `${styles.link} ${styles.select}`
            : styles.link
        }
        replace
      >
        {text}
      </Link>
    </Li>
  );
};

export default NavItem;

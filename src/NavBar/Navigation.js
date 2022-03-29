import styled from "styled-components";
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (${(props) =>
      props.type === "large" ? "max-width: 768px" : "min-width: 768px"}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: wrap;
  margin-left: 10px;
  @media (max-width: 767px) {
    margin: 0;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = styled.nav`
  height: 70px;
  position: fixed;
  width: 100%;
  padding: 0 13px;
  background-color: #fff;
  box-shadow: 0px -2px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Actions = styled.div`
  ${(props) =>
    props.for === "mobile"
      ? "margin-top: 100px; flex-flow: column;"
      : "justify-content: center;"}
  display: flex;
  align-items: center;
`;

const Header = styled.header`
  padding-bottom: 100px;
`;

//a container that contains large and small navbar
const Navigation = () => {
  return (
    <Header>
      <Nav>
        <LargeNavBar />
        <SmallNavBar />
      </Nav>
    </Header>
  );
};

export default Navigation;

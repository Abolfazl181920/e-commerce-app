import { useState } from "react";
import styled from "styled-components";
import { Actions, NavContent, Ul } from "./Navigation";
import NavItem from "./NavItem";
import NavTitle from "./NavTitle";
import SignInLink from "./SignInLink";
import SignUpLink from "./SignUpLink";

const Bar1 = styled.div`
  width: 50px;
  height: 7px;
  background-color: #000;
  border-radius: 5px;
  margin-bottom: 5px;
  &:last-child {
    margin: 0;
  }
  ${(props) =>
    props.type === "x-1"
      ? "transform: rotate(49deg); margin-top: 20px;"
      : props.type === "x-2"
      ? "transform: translateY(-12px) rotate(135deg); margin-top: 20px;"
      : ""}
`;

const Bar2 = styled.div`
  width: 30px;
  height: 7px;
  background-color: #000;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const MenuIconContainer = styled.div`
  cursor: pointer;
`;

const SideNav = styled.div`
  position: fixed;
  background-color: #fff;
  height: 100%;
  min-width: 70%;
  top: 0;
  right: ${(props) => (props.display === "true" ? "0" : "-150%")};
  z-index: 2;
  transition: right 0.4s;
  display: flex;
  flex-flow: column;
  padding: 10px;
  @media (min-width: 767px) {
    display: none;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000057;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.display === 'true' ? 1 : 0)};
  ${(props) => (props.display === "false" ? "pointer-events: none;" : "")}
  transition: opacity 0.4s;
  @media (min-width: 767px) {
    display: none;
  }
`;

const CloseIconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 0;
  cursor: pointer;
`;

const NavItemsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

//side nav for small devices
const SmallNavBar = () => {
  //state to to open or close the menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Backdrop
        /* if user clicked on backdrop,
       if the class name of users target is equal to current target, close the menu. else, dont close */
        onClick={(e) => {
          if (e.target.className === e.currentTarget.className)
            setIsOpen(false);
        }}
        //should be displayed or not
        display={isOpen.toString()}
      />
      <NavContent type="small">
        <NavTitle title="e-commerce" />
        <MenuIconContainer
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Bar1 />
          <Bar2 />
          <Bar1 />
        </MenuIconContainer>
      </NavContent>
      <SideNav display={isOpen.toString()}>
        <CloseIconContainer
          //if user click on X icon, close the menu
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Bar1 type="x-1" />
          <Bar1 type="x-2" />
        </CloseIconContainer>
        <NavItemsContainer>
          <Ul>
            <NavItem path="/#why-us" text="why us" />
            <NavItem path="/#reviews" text="reviews" />
            <NavItem path="/products" text="products" />
          </Ul>
          <Actions for="mobile">
            <SignInLink />
            <SignUpLink />
          </Actions>
        </NavItemsContainer>
      </SideNav>
    </>
  );
};

export default SmallNavBar;

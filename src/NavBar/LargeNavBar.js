import styled from "styled-components";
import { Actions, NavContent, Ul } from "./Navigation";
import NavItem from "./NavItem";
import NavTitle from "./NavTitle";
import SignInLink from "./SignInLink";
import SignUpLink from "./SignUpLink";

const Items = styled.div`
  display: flex;
`;

//nav bar for large devices
const LargeNavBar = () => {
  return (
    <NavContent type="large">
      <Items>
        <NavTitle title="e-commerce" />
        <Ul>
          <NavItem path="/#why-us" text="why us" />
          <NavItem path="/#reviews" text="reviews" />
          <NavItem path="/products" text="products" />
        </Ul>
      </Items>
      <Actions>
        <SignInLink />
        <SignUpLink />
      </Actions>
    </NavContent>
  );
};

export default LargeNavBar;

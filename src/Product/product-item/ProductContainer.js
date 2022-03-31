import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: #fff;
  box-shadow: 1px 2px 12px -3px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
  padding: 7px;
  width: 220px;
  height: 270px;

  &:hover {
    box-shadow: 1px 2px 28px -3px rgba(0, 0, 0, 0.2);
  }
`;

export default ProductContainer;

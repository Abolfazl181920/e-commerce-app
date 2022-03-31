import styled from "styled-components";

const Discount = styled.span`
  padding: 5px;
  background-color: #afffaa;
  color: #0fd514;
  border-radius: 5px;
`;

const ProductDiscount = (props) => {
  const { discount } = props;
  return <Discount>{discount}</Discount>;
};

export default ProductDiscount;

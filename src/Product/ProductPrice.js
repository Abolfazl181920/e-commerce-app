import styled from "styled-components";

const Price = styled.p`
  font-size: ${(props) => props.priceSize}px;
`;

const DollarSign = styled.sup`
  font-weight: 800;
  font-size: ${(props) => props.dollarSignSize}px;
`;

const ProductPrice = (props) => {
  const { priceSize, signSize, price } = props;
  return (
    <>
      <DollarSign dollarSignSize={signSize}>$</DollarSign>
      <Price priceSize={priceSize}>{price}</Price>
    </>
  );
};

export default ProductPrice;

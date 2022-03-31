import styled from "styled-components";
import ProductImage from "Product/ProductImage";
import ProductContainer from "./ProductContainer";
import ProductDiscount from "./ProductDiscount";
import ProductPrice from "Product/ProductPrice";
import GoToProductLink from "./GoProductPageLink";
import ProductTitle from "Product/ProductTitle";

const PricePlace = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const ProductItem = (props) => {
  const { imgSrc, productTitle, discount, price } = props;
  return (
    <ProductContainer>
      <ProductImage src={imgSrc} imgWidth="100%" imgHeight="145px" />
      <ProductTitle size="16" title={productTitle} />
      <PricePlace>
        <ProductDiscount discount={discount} />
        <PriceContainer>
          <ProductPrice priceSize="20" signSize="14" price={discount * price} />
        </PriceContainer>
      </PricePlace>
      <GoToProductLink to="/" text="go to page" />
    </ProductContainer>
  );
};

export default ProductItem;

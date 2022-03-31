import styled from "styled-components";

const Image = styled.img`
width: ${(props) => props.imgWidth};
height: ${(props) => props.imgHeight};
border-radius: 10px;
`;

const ProductImage = (props) => {
  const { src, imgWidth, imgHeight } = props;

  return <Image src={src} imgWidth={imgWidth} imgHeight={imgHeight} />;
};

export default ProductImage;
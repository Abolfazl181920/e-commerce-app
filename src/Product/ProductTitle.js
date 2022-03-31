import styled from "styled-components";

const Title = styled.h2`
  font-size: ${(props) => props.size};
  font-weight: 800;
`;

const ProductTitle = (props) => {
    const { size, title } = props;

    return <Title size={size}>{title}</Title>
}

export default ProductTitle;

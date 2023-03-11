import styled from "styled-components";

import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cartItem, items }) => {
  return (
    <Container>
      {items?.map((item) => (
        <Product item={item} key={item.id} cartItem={cartItem} />
      ))}
    </Container>
  );
};

export default Products;

import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const background = (props: any) => props.theme.background.secondary;
const onHover = (props: any) => props.theme.onHover.primary;

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 60.94%;
  display: table;
  h3 {
    font-size: 17px;
    text-align: left;
    color: ${primary};
    margin: 10px 0;
  }
`;

export const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
  margin: 0 auto;
`;

export const RestaurantCard = styled.div`
  background: ${background};
  width: 283px;
  height: 235px;
  padding: 7px;
  margin-bottom: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  cursor: pointer;
  &:hover {
    background: ${onHover};
  }
`;

export const Product = styled.div`
  color: ${primary};
  img {
    width: 265px;
    height: 140px;
    border-radius: 5px;
  }
  .div-produto-titulo-e-nota {
    text-decoration: none;
    font-weight: 300;
    font-size: 16px;
    margin: 0 3px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    .div-nota {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }
    strong {
      text-align: left;
    }
    span {
      color: #fb0;
      margin-left: 4px;
      font-size: 16px;
    }
  }
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  margin: 7.5px 3px 0 3px;
  .div-produto-culinaria-e-localizacao {
    p {
      margin-bottom: 7.5px;
      text-align: left;
    }
  }
`;
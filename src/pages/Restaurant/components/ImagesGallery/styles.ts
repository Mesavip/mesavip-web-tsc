import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  img {
    border-radius: 5px;
  }
  .imagem-grande {
    margin-right: 3px;
    margin-left: 3px;
    img {
      height: 13.5rem;
      width: 19rem;
    }
    @media only screen and (min-width: 768px) {
      img {
        width: 400px;
        height: 240px;
      }
    }
  }
  .imagens-pequenas {
    row-gap: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    img {
      height: 120px;
    }
    div:nth-child(1) {
      margin-right: 3px;
    }
  }
`;

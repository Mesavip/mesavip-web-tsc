import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;

export const Container = styled.div`
  color: ${primary};
  margin: 0 auto;
  display: table;
  text-align: center;
  width: 52.5%;
  h1 {
    color: ${primary};
    font-size: 20px;
    margin: 20px 0;
  }
`;

export const ReservationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  h1 {
    color: ${primary};
    font-size: 20px;
    margin: 20px 0;
  }
`;

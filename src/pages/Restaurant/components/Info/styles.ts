import styled from 'styled-components';

const Padding = 'padding: 10px 10px 0px 10px;';
const primary = (props: any) => props.theme.colors.primary;
const background = (props: any) => props.theme.background.secondary;

export const Container = styled.div`
  background: ${background};
  border-radius: 10px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media only screen and (min-width: 768px) {
    ${Padding};
    justify-content: space-between;
    flex-direction: row;
    text-align: unset;
  }
`;

export const Details = styled.div`
  p {
    margin: 15px 0;
  }
`;

export const Rate = styled.div`
  .nota {
    border: 1px solid #fb0;
    width: 75px;
    padding: 5px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px auto;
    text-align: center;
    span {
      margin-left: 5px;
      font-size: 20px;
      color: #fb0;
      font-weight: bold;
    }
  }
`;

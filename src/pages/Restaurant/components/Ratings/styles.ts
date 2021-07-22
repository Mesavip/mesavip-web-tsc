import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const separator = (props: any) => props.theme.separator;

const Padding = 'padding: 20px 30px 0px 30px;';

export const Container = styled.div`
  .stars {
    display: flex;
  }
`;

export const Average = styled.div`
  ${Padding};
  width: 270px;
  text-align: center;
  margin: 0 auto;
  h3 {
    font-size: 50px;
    font-weight: 500;
    margin-top: 20px;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    margin-top: 12.5px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const NumberOfComments = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  margin: 5px auto;
  ${Padding};
  span {
    margin-left: 3px;
    color: ${primary};
    font-size: 16px;
  }
  svg {
    margin-top: 2.5px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Rating = styled.div`
  ${Padding};
  font-size: 17px;
  font-weight: 400;
  .nome-data {
    display: flex;
    justify-content: space-between;
  }
  svg {
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Comment = styled.div`
  margin-top: 20px;
`;

export const Separator = styled.div`
  margin-bottom: 20px;
  padding: 0 30px;
  border: 0.1px solid ${separator};
`;

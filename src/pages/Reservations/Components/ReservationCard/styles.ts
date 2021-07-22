import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const backgroundPrimary = (props: any) => props.theme.background.primary;
const backgroundSecondary = (props: any) => props.theme.background.secondary;
const onHover = (props: any) => props.theme.onHover.primary;
const separator = (props: any) => props.theme.separator;

export const Container = styled.div`
  background: ${backgroundSecondary};
  width: 310px;
  height: 170px;
  padding: 7px;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  height: 100px;
  width: 275px;
  margin: 5px 0 0 5px;
`;

export const Date = styled.div`
  background: ${backgroundPrimary};
  color: inherit;
  width: 115px;
  height: 78px;
  border-radius: 10px;
  h2 {
    margin-top: 5px;
    font-size: 35px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const NameAndRate = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 500;
  }
`;

export const Rate = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fb0;
  span {
    margin-left: 4px;
  }
`;

export const Time = styled.div`
  text-align: left;
  font-size: 12px;
  margin-top: 5px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
  margin-top: 5px;
  font-size: 11px;
`;

export const Separator = styled.div`
  width: 290px;
  margin: 0 auto 8.5px auto;
  padding: 0 30px;
  border: 0.25px solid ${separator};
`;

export const Button = styled.button`
  background: ${backgroundSecondary};
  color: ${primary};
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 150px;
  height: 35px;
  font-size: 14px;
  &:hover {
    background: ${onHover};
  }
`;

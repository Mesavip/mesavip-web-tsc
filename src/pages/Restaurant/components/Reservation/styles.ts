import styled from 'styled-components';

const Padding = 'padding: 10px 20px 0px 20px;';
const background = (props: any) => props.theme.background.secondary;
const primaryButtonbg = (props: any) =>
  props.theme.form.primaryButton.background;
const primaryButtonOnHover = (props: any) =>
  props.theme.form.primaryButton.onHover;

export const Container = styled.div`
  background: ${background};
  margin: 0 auto;
  font-size: 17px;
  ${Padding}
  width: 320px;
  height: 430px;
  border-radius: 10px;
`;

export const AvailableHours = styled.div`
  display: flex;
  margin: 0 auto;
  height: 65px;
  width: 220px;
  font-size: 18px;
`;

export const Hours = styled.div`
  display: block;
  strong {
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  margin-top: 10px;
  font-size: 17px;
  width: 75px;
  height: 30px;
  border-radius: 3px;
  border: 0 0 1px 0px;
  background: #fff;
`;

export const Button = styled.button`
  background: ${primaryButtonbg};
  padding: 8px;
  border-radius: 30px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  width: 275px;
  height: 65px;
  &:hover {
    background: ${primaryButtonOnHover};
  }
`;

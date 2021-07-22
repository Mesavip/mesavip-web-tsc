import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const boxShadow = (props: any) => props.theme.form.boxShadow;
const border = (props: any) => props.theme.form.input.border;
const formbg = (props: any) => props.theme.form.background;
const placeholder = (props: any) => props.theme.form.input.placeholder;
const separator = (props: any) => props.theme.form.separator;
const primaryButtonbg = (props: any) =>
  props.theme.form.primaryButton.background;
const primaryButtonOnHover = (props: any) =>
  props.theme.form.primaryButton.onHover;
const secondaryButtonbg = (props: any) =>
  props.theme.form.secondaryButton.background;
const secondaryButtonOnHover = (props: any) =>
  props.theme.form.secondaryButton.onHover;

export const Container = styled.div`
  text-align: center;
  margin-bottom: 45px;
`;

export const Text = styled.div`
  padding: 50px;
  h3 {
    color: ${primary};
    font-size: 24px;
    font-weight: 400;
    span {
      color: inherit;
      font-weight: 700;
    }
  }
`;

export const Form = styled.form`
  background: ${formbg};
  width: 460px;
  height: 440px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${boxShadow};
  padding-top: 20px;
  a {
    color: ${primary};
  }
  @media (max-width: 768px) {
    width: 350px;
  }
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 86.96%;
  height: 70px;
  padding: 15px;
  font-size: 17px;
  background: ${formbg};
  border: 1px solid ${border};
  border-radius: 6px;
  color: ${primary};
  &::placeholder {
    color: ${placeholder};
  }
`;

export const SubmitInput = styled(Input)`
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: ${primaryButtonbg};
  cursor: pointer;
  &:hover {
    background-color: ${primaryButtonOnHover};
  }
`;

export const Separator = styled.div`
  align-items: center;
  text-align: center;
  margin: 20px 16px;
  border-bottom: 1px solid ${separator};
  display: flex;
`;

export const CreateAccountLink = styled.div`
  a {
    text-decoration: none;
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 86.96%;
    height: 70px;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid ${border};
    border-radius: 6px;
    background: ${secondaryButtonbg};
    color: #fff;
    &:hover {
      background-color: ${secondaryButtonOnHover};
    }
  }
`;

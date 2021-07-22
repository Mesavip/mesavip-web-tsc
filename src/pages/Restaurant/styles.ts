import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const background = (props: any) => props.theme.background.secondary;
const separator = (props: any) => props.theme.form.separator;

export const Container = styled.div`
  color: ${primary};
  margin: 0 auto;
  strong,
  h1 {
    color: inherit;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .banner {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    .banner {
      display: block;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
    flex-direction: column;
    .content {
      background: ${background};
      /* text-align: center; */
      .imagens-pequenas {
        display: none;
      }
    }
    .reservation-bg {
      background: ${background};
      height: fit-content;
      @media only screen and (min-width: 768px) {
        .separator {
          display: none;
        }
      }
    }
  }
  .ratings {
    background: ${background};
  }
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    width: 1200px;
    .flex {
      width: 1200px;
      flex-direction: row;
      margin: 0 auto;
      gap: 2rem;
      .content {
        width: 828px;
        .imagens-pequenas {
          display: grid;
        }
      }
    }
    .ratings {
      width: 828px;
    }
  }
`;

export const Separator = styled.div`
  align-items: center;
  text-align: center;
  margin: 20px 40px;
  border-bottom: 1px solid ${separator};
  display: flex;
`;

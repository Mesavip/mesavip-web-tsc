import styled from 'styled-components';

const primary = (props: any) => props.theme.colors.primary;
const background = (props: any) => props.theme.background.secondary;
const onHover = (props: any) => props.theme.onHover.primary;
const headerShadow = (props: any) => props.theme.headerShadow;

export const Nav = styled.nav`
  background: ${background};
  overflow: hidden;
  ${headerShadow}
  img {
    width: 165px;
    height: 80px;
  }
  .checkbox {
    display: none;
  }
  .nav_toggle {
    position: absolute;
    cursor: pointer;
    right: 0;
    margin: 0rem 1rem;
    .checkbox {
      display: none;
    }
    .close {
      display: none;
      margin-top: 1.5rem;
    }
    .menu {
      margin-top: 1.5rem;
    }
  }
  .nav_menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .switch-theme {
      margin: 0 25px;
      .switch-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 20;
      }
    }
    li {
      cursor: pointer;
      list-style: none;
      display: none;
      border-bottom: 1px solid #9087872f;
      width: 100%;
      &:first-child {
        margin-right: auto;
        display: block;
        text-align: left;
      }
      a {
        text-decoration: none;
        font-size: 16px;
        color: ${primary};
        font-weight: 400;
      }
      .text {
        font-size: 18px;
      }
    }
    .switch-theme {
      margin: 5px 0 0px 5px;
    }
  }
  .github-link {
    text-align: center;
    width: 80px;
    padding: 0 20px;
  }
  .on-hover {
    padding: 10px 5px;
    &:hover {
      background: ${onHover};
    }
  }
  .buttons {
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 5px;
    button {
      font-size: 18px;
      font-weight: 400;
      border: 0;
      color: ${primary};
      background: ${background};
    }
    button:hover {
      background: ${onHover};
    }
    li:nth-child(1) {
      margin-bottom: 15px;
    }
  }
  // Toggle the hamburger menu in mobile view
  #checkbox:checked ~ ul.nav_menu li {
    display: block;
  }
  //Change from menu to close icon on tap
  #checkbox:checked ~ label.nav_toggle .close {
    display: block;
  }
  #checkbox:checked ~ label.nav_toggle .menu {
    display: none;
  }
  // Desktop view
  @media only screen and (min-width: 768px) {
    .separator {
      display: none;
    }
    & {
      .nav_toggle {
        display: none;
      }
      .nav_menu {
        flex-direction: row;
        --tw-shadow: 0;
        box-shadow: 0;
        .logo {
          margin-left: 10px;
        }
        li {
          display: block;
          width: inherit;
          border-bottom: 0;
        }
        .switch-theme {
          margin-right: 20px;
          margin-left: 15px;
        }
      }
      .on-hover {
        padding: 30px 20px;
      }
      .buttons {
        margin-right: 12px;
        margin-left: 15px;
        margin-top: 0;
        margin-bottom: 0;
        display: flex;
        button {
          font-size: 17px;
          font-weight: 400;
          width: 160px;
          height: 55px;
          border-radius: 4px;
          border: 2px solid ${primary};
          color: ${primary};
          background: ${background};
        }
        li:nth-child(1) {
          margin-bottom: 0;
        }
        li:nth-child(2) {
          margin-left: 16px;
          margin-bottom: 0;
        }
      }
    }
  }
`;
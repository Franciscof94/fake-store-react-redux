import Screen from "../../styles/screen";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  box-shadow: 0 0 5rem 0.5rem var(boxShadow);
  position: fixed;
  background: #ffefba;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  button {
    cursor: pointer;
  }

  .headerCenter {
    width: min(100%, 1300px);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerBtn {
    ${Screen.md`
      display:none;
      `}
    background-color: transparent;
  }

  .headerNav {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}

    ul {
      display: inline-flex;
      gap: 2.5rem;
      li {
        list-style: none;
      }
      a {
        display: inline-block;
        font-size: 1.62rem;
        padding: 0.2rem;
        border-bottom: 0.3rem solid transparent;
        color: var(--blackLetter);
      }

      .active {
        border-bottom-color: #fc766a;
      }
    }
  }

  .headerCart {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}
  }
`;

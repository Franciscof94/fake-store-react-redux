import styled from "styled-components";
import Screen from "../../styles/screen";

export const Wrapper = styled.div`
  ${Screen.md`
        display: none;
    `}

  button {
    cursor: pointer;
    background-color: transparent;
  }

  .sidebar {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    transform: translate(-120%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  .sidebarHeader {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffefba;
    padding: 0 2rem;
    box-shadow: 0 0 1rem 1rem white;
  }

  .sidebarNav {
    margin-bottom: 4rem;
    a {
      display: block;
      padding: 1rem;
      font-size: 2rem;
      color: var(--blackLetter);
      transition: all 0.3s;
      &:hover {
        padding-left: 1.5rem;
      }
    }
    .active {
      color: #fc766a;
    }
  }

  .sidebarCart {
    width: max-content;
    margin-inline: auto;
    cursor: pointer;
  }
`;

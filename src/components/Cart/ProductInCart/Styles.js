import styled from "styled-components";
import Screen from "../../../styles/screen";

export const Wrapper = styled.article`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  ${Screen.sm`
    gap: 2rem;
    `}
  ${Screen.md`
    gap: 3rem;
    `}

  .itemImg {
    display: none;
    ${Screen.md`
    display: inline;
    `}
    img {
      max-width: 8rem;
    }
  }

  .itemInfo {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    span {
      color: #f57b63;
    }
    a {
      font-size: 1.42rem;
      color: var(--orange);
    }
    p {
      font-size: 1.62rem;
    }
  }

  .itemDelete {
    svg {
      transition: all 0.2s;
    }
  }

  button {
    background-color: white;
    cursor: pointer;
  }
  .buttonsContainer {
    display: flex;

    div {
      display: flex;
      align-items: center;
      span {
        font-size: 1.6em;
        font-weight: bold;
        color: var(--grey4);
        padding: 0 18px;
      }
    }
  }
`;

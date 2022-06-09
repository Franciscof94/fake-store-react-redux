import styled from "styled-components";
import { css } from "styled-components";
import Screen from "../../styles/screen";

export const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  justify-content: center;
  ${Screen.md`
    grid-template-columns: 1fr 1fr;`}
  ${Screen.xl`
    grid-template-columns: 1fr 1fr 1fr;`}


  article {
    padding: 1rem;
    background: white;
    border-radius: 0.3rem;
    transition: all 0.2s;
    min-height: 30rem;

    a {
      color: var(--blackLetter);
    }

    &:hover {
      box-shadow: 0 0 1rem 1rem var(--boxShadow);
    }
    h3 {
      margin: 1rem 0 0 0;
      font-size: 1.62rem;
      min-height: 2.4rem;
    }
    img {
      max-height: 20rem;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    .price {
      font-size: 1.8rem;
      color: #fc766a;
    }

    .row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 1.2rem 0;
    }
    button {
      background-color: white;
      padding: 0.2rem 0.5rem;
      border: 0.2rem solid var(--orange);
      color: var(--blackLetter);
      border-radius: 0.2rem;
      font-size: 1.3rem;
      transition: all 0.3s;
      cursor: pointer;
    }
    button:hover {
      background-color: var(--orange);
      color: white;
    }
  }
`;

export const override = css`
  display: block;
  margin: 0 auto;
  color: blue;
  border-color: orange;
  position: absolute;
  top: 50%;
  left: 45%;
`;

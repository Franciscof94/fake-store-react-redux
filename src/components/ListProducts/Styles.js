import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  article {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.3rem;
    transition: all 0.3s;
    transform: scale(1);
    &:hover {
      box-shadow: 0 0 0.7rem 0.7rem var(--grey3);
    }
  }

  img {
    width: min(25vw, 220px);
    height: 20rem;
    object-fit: contain;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.62rem;
    min-height: 2.4rem;
  }

  .price {
    font-size: 1.8rem;
    color: #fc766a;
  }

  button {
    width: max-content;
    background-color: white;
    border: 0.2rem solid var(--orange);
    border-radius: 0.2rem;
    padding: 0.3rem 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
  }

  button:hover {
    color: white;
    background-color: var(--orange);
  }
  .description {
    font-size: 1.42rem;
    margin: 1.5rem 0;
    color: var(--grey1);
  }
`;

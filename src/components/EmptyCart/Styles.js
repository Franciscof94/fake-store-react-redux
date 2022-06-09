import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  place-items: center;

  .emptyCart {
    text-align: center;
    h2 {
      margin-bottom: 1.5rem;
      span {
        color: #fc766a;
      }
    }
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
`;

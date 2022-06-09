import styled from "styled-components";

export const Wrapper = styled.article`
  border: 0.2rem solid var(--orange);
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  align-self: flex-start;
  margin-bottom: 1.5rem;
  h3 {
    color: var(--blackLetter);
    span {
      color: var(--blackLetter);
      display: inline-block;
      text-align: center;
      font-size: 1.3em;
      color: #f57b63;
    }
  }

  h4 {
    color: var(--blackLetter);
    span {
      color: #f57b63;
      display: inline-block;
      text-align: center;
      font-size: 1.6em;
      width: 12rem;
    }
  }

  hr {
    border-bottom: 0.2rem solid #b9e0c6;
    margin: 1rem 0;
  }

  .totalBtn {
    background: white;
    width: 100%;
    padding: 0.5rem;
    color: var(--grey4);
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid var(--orange);
    border-radius: 0.2rem;
    transition: all 0.3s;
    &:hover {
      background: var(--orange);
      color: white;
    }
  }
`;

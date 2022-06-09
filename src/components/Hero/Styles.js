import styled from "styled-components";

export const Wrapper = styled.section`
  overflow: hidden;
  .hero {
    padding: 0 1rem 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .goToHome {
    z-index: 5;

    button {
      font-size: 1.6rem;
    }
  }

  button {
    background-color: transparent;
    padding: 0.2rem 0.5rem;
    border: 0.2rem solid #fc766a;
    color: var(--blackLetter);
    border-radius: 0.2rem;
    font-size: 1.3rem;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: #fc766a;
    color: white;
  }

  .heroTitle {
    align-self: flex-start;
    margin-top: 10vh;
    position: relative;
    z-index: 1;
    span {
      color: #fc766a;
    }
    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: -5rem;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background-color: var(--orange);
      z-index: -1;
    }
  }

  .headerLink {
    width: max-content;
    z-index: 15;
  }

  .hero-img {
    width: min(90%, 480px);
    align-self: flex-end;
  }
`;

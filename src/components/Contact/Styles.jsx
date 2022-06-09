import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 750px;
  margin: 0 auto;

  .contactText {
    h2 {
      font-size: 1.9rem;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    p {
      font-size: 1.5rem;
    }
  }

  .contactForm {
    border-radius: 0.3rem;
    border: 0.2rem solid var(--orange);
    padding: 0.5rem;
    width: min(100%, 400px);
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    input,
    button {
      font-size: 1.42rem;
      outline: none;
    }

    button {
      background: var(--orange);
      border-radius: 0.3rem;
      padding: 0.5rem 1rem;
      transition: all 0.3s;
      color: var(--blackLetter);
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;

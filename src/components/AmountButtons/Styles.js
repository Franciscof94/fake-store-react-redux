import styled from "styled-components";

export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 1rem;

  .opacity {
    opacity: 0.5;
    cursor: auto;
  }

  span {
    text-align: center;
    min-width: 2.6rem;
    font-size: 2.5rem;
    color: var(--gray-color-1);
  }

  button {
    padding: 0.3rem;
    display: inline-block;
    transform: scale(1);
  }

  button:active {
    transform: scale(0.9);
  }
`;

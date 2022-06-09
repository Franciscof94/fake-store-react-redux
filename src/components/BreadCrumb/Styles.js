import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1.3rem 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    font-size: 1.42rem;
    color: var(--blackLetter);
    transition: all 0.3s;
    &:hover {
      color: var(--orange);
    }
  }
  span {
    font-size: 1.42rem;
    color: var(--orange);
  }
`;

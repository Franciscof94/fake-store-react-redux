import styled from "styled-components";
import Screen from "../../styles/screen";

export const Wrapper = styled.section`
  padding: 2rem 1.5rem;
  display: grid;
  justify-items: center;
  gap: 1.5rem;
  max-width: 1300px;
  margin: 0 auto;

  ${Screen.md`
  grid-template-columns: 1fr 1fr 1fr;
  `}

  .service {
    padding: 1rem 1.5rem;
    border: 0.2rem solid var(--orange);
    border-radius: 0.3rem;
    transition: all 0.3s;
    font-size: 1.3rem;

    &:hover {
      box-shadow: 0 0 1rem 1rem var(--grey3);
    }
  }

  .serviceHeader {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      color: var(--orange);
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  p {
    text-align: justify;
  }
`;

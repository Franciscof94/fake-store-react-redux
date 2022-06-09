import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: var(--orange);
  height: 5rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;

  p {
    text-align: center;
    color: white;
  }

  a {
    color: #fff;
    transition: all 0.4s;
  }
  a:hover {
    color: var(--blackLetter);
  }
`;

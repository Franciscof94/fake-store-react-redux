import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 1.62rem;
    color: var(--blackLetter);
  }

  .cartContainer {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0.3rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .active {
    border-color: #fc766a;
  }

  .cartIcon {
    position: relative;
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -12px;
      right: -18px;
      padding: 0.1rem;
      min-width: 2rem;
      background-color: #fc766a;
      border-radius: 50%;
      color: white;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

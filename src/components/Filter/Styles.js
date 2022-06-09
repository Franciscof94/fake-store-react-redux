import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--blackLetter);
  .categoryContainer {
    font-size: 1.62em;
    display: grid;
    justify-items: flex-start;
    gap: 1rem;
    button {
      font-size: 1.62rem;
      border-bottom: 0.3rem solid transparent;
      background-color: white;
      color: var(--blackLetter);
      transition: 0.3s;
      cursor: pointer;
    }
    .active {
      padding-left: 0.2rem;
      border-bottom-color: var(--orange);
    }
    div {
      margin: 4px 0;
      padding: 5px 0;
      display: inline-block;
    }
  }
  span {
    font-weight: bold;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: var(--backgroundInput);
  width: min(100%, 200px);
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

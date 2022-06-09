import styled from "styled-components";
import Screen from "../../styles/screen";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  ${Screen.sm`
        gap:0 1rem;
    `}
  .sortBtns {
    display: flex;
    align-items: center;
    jusitfy-content: center;
    gap: 0.5rem;
  }

  .line {
    height: 3px;
    background-color: #fc766a;
    width: 16%;
    margin-left: 45px;
    ${Screen.lg`
    display: inline-block;
    `}
    ${Screen.xl`
    width:35%;
    `}
  }

  .productsFound {
    font-size: 1.2rem;
    margin-left: 0.6rem;
  }

  .sortForm {
    margin-left: auto;

    select {
      border-radius: 0.2rem;
      cursor: pointer;
    }
    label {
      color: var(--blackLetter);
      margin-right: 0.2rem;
      font-size: 1.42rem;
    }
    option {
      font-size: 1.4rem;
      padding: 1rem;
      background: white;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const GridButton = styled.div`
  background-color: white;
  padding: 0.4rem;
  cursor: pointer;
  display: inline-block;
  border: ${(props) => (props.view ? "0.2rem solid var(--orange)" : null)};
  border-radius: 0.2rem;
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ListButton = styled.div`
  background-color: white;
  padding: 0.4rem;
  cursor: pointer;
  display: inline-block;
  border: ${(props) => (!props.view ? "0.2rem solid var(--orange)" : null)};
  border-radius: 0.2rem;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

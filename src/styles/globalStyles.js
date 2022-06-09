import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Screen from "./screen";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    border: none
  }

  :root {
      --blue: #01C3FF;
      --blackLetter: #1b1b1b;
      --grey: #F9F9F9;
      --grey1: #9b9fa9;
      --grey2: #d6d7da41;
      --grey3: #e3e3e3;
      --grey4: #6b7280;
      --orange: #F5B250;
      --errorColor: #F44336;
      --backgroundInput: #F2F2F3;
      --boxShadow: #d6d7da41;

      --max-width: 1300px;
  --header-height: 6rem;
  }


a {
  text-decoration: none;
}

html {
  scroll-behavior: smooth; 
}

html {
  font-size: 0.525rem;  
  
  ${Screen.sm`
    font-size: 0.562rem;  
    `}

${Screen.md`
  font-size: 0.625rem; 
  `}

${Screen.lg`
font-size: 0.75rem; 
  `}
}


  section {
  width: min(100%, var(--max-width));
  margin-inline:  auto;
}
main {
  margin-top: var(--header-height);
}


  .page {
  min-height: calc(
    100vh -
      (6rem + 5rem + 5rem)
  );
}
  .page-w-b {
    margin-top: 6rem;
  min-height: calc(100vh - (6rem + 5rem));
}
  
`;

export const Nav = styled.div`
  max-width: 1300px;
  width: 100%;
  font-size: 1.2rem;
  a {
  }
`;

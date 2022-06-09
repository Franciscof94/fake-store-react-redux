import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="page-w-b">
      <div>Ha ocurrido un error</div>
      <Link to="/">Ir al inicio</Link>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fc766a;
  font-size: 2rem;
  a {
    color: var(--blackLetter);
    border: 0.2rem solid var(--orange);
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    transition: all 0.3s;
  }
  a:hover {
    background-color: var(--orange);
    color: white;
  }
`;

export default Error;

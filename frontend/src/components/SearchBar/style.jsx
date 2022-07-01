import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  input {
    background: #f0f0f0;
    border-radius: 10px;
    height: 2vh;
    width: 60vw;
    font-size: 0.9rem;
  }
  input:placeholder-shown {
    font-size: 1rem;
  }
`;

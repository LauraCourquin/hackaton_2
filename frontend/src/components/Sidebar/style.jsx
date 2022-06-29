import styled from "styled-components";

export default styled.aside`
  border: solid yellowgreen 1px;
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;

  button {
    border: 3px solid #4a64d8;
    background-color: transparent;
    border-radius: 8px;
    box-sizing: border-box;
    width: 80%;
    align-self: center;
    margin-top: 1rem;
    height: 2rem;
  }

  .shopImg {
    background-color: rgba(45, 198, 173, 1);
  }
`;

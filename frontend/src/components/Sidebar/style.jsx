import styled from "styled-components";

export default styled.aside`
  border-right: solid black 2px;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;

  button {
    background-color: transparent;
    border-radius: 8px;
    box-sizing: border-box;
    width: 80%;
    align-self: center;
    margin-top: 1rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button:active {
    background: #ffffff;
  }

  .shopImg {
    box-sizing: border-box;
    height: auto;
    width: 1.8rem;
  }
  .svgContainer {
    background-color: transparent;
    border-radius: 8px;
    box-sizing: border-box;
    width: 15%;
    height: auto;
    margin-right: 1rem;
  }
  .svgContainerHome {
    background: #2dc6ad;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12),
      0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    box-sizing: border-box;
    width: 15%;
    height: auto;
    margin-right: 1rem;
  }
`;

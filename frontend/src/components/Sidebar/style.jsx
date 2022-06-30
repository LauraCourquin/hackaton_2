import styled from "styled-components";

export default styled.aside`
  border-right: solid black 2px;
  height: 100%;
  padding-right: 2rem;
  margin-left: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 40vw;
  box-sizing: border-box;

  button {
    background-color: transparent;
    border-radius: 8px;
    box-sizing: border-box;
    border: none;
    width: 80%;
    align-self: center;
    margin-top: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button:active {
    background: #ffffff;
    box-shadow: 0px 10px 27px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .shopImg,
  .shopImg2 {
    box-sizing: border-box;
    height: auto;
    width: 1.8rem;
    box-shadow: 1px 12px 32px -10px rgba(0, 0, 0, 0.65);
  }
  .shopImg2 {
    background: #ffffff;
    box-shadow: 1px 12px 32px -10px rgba(0, 0, 0, 0.65);
    border-radius: 8px;
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

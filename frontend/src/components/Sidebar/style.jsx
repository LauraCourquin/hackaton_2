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
  position: sticky;
  top: 1.5rem;

  button {
    background-color: transparent;
    border-radius: 8px;
    box-sizing: border-box;
    border: none;
    width: 80%;
    margin-top: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    margin-left: 2rem;
  }

  button:active {
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
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

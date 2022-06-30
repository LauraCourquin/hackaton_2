import styled from "styled-components";

export default styled.article`
  .myCard {
    background-color: aquamarine;
    width: 20vw;
    height: 60vh;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
  .imgCard {
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  img {
    height: 15vh;
    width: 15vh;
    border: 2px solid black;
    border-radius: 100%;
  }
  .available {
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    border-radius: 100%;
    background-color: red;
    display: block;
    position: absolute;
    bottom: 0;
    margin-bottom: 0.8rem;
  }
  .Cardinfo {
    border: dashed red;
    h3,
    h4 {
      margin: 0;
    }
  }
  .mail {
    border: 1px solid black;
    width: 100%;
    height: 20%;
  }
  .info {
    display: flex;
    flex-direction: row;
  }
  li {
    list-style: none;
    text-align: center;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    img {
      width: 70%;
      height: 70%;
    }
  }
`;
